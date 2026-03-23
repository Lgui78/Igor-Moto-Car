-- ============================================
-- PASSO 3: MOTOR DE CÁLCULO (DRE & KPIs)
-- Moto Car BI - Camada de Inteligência
-- ============================================

-- 1. VIEW CONSOLIDADA PARA O DRE GERENCIAL (Hieraquia de Lucro)
CREATE OR REPLACE VIEW moto_car.view_consolidada_dre AS
WITH Receitas AS (
    SELECT 
        data, filial_id, 
        SUM(receita_bruta) as rec_bruta, 
        SUM(devolucao) as devolucoes,
        SUM(receita_bruta - devolucao) as rec_liquida,
        SUM(custo) as custo_total
    FROM (
        SELECT data, filial_faturamento as filial_id, receita_bruta, devolucao, custo FROM moto_car.fato_motos
        UNION ALL
        SELECT data, filial_id, receita_bruta, devolucao, custo FROM moto_car.fato_pecas
    ) t GROUP BY data, filial_id
),
Despesas AS (
    SELECT 
        data, filial_id,
        SUM(CASE WHEN categoria_despesa = 'Comercial' THEN valor ELSE 0 END) as desp_comerciais,
        SUM(CASE WHEN categoria_despesa = 'Administrativa' THEN valor ELSE 0 END) as desp_administrativas,
        SUM(CASE WHEN categoria_despesa = 'Pessoal' THEN valor ELSE 0 END) as desp_pessoal,
        SUM(valor) as desp_total
    FROM moto_car.fato_despesas GROUP BY data, filial_id
),
Financeiro AS (
    SELECT 
        data, filial_id,
        SUM(receita_financeira) as rec_fin,
        SUM(despesa_financeira) as desp_fin,
        SUM(receita_financeira - despesa_financeira) as res_financeiro
    FROM moto_car.fato_financeiro GROUP BY data, filial_id
)
SELECT 
    r.data, r.filial_id,
    r.rec_bruta, r.devolucoes, r.rec_liquida, r.custo_total,
    (r.rec_liquida - r.custo_total) as lucro_bruto,
    d.desp_comerciais, d.desp_administrativas, d.desp_pessoal, d.desp_total,
    (r.rec_liquida - r.custo_total - d.desp_total) as resultado_operacional,
    f.res_financeiro,
    (r.rec_liquida - r.custo_total - d.desp_total + f.res_financeiro) as lucro_liquido
FROM Receitas r
LEFT JOIN Despesas d ON r.data = d.data AND r.filial_id = d.filial_id
LEFT JOIN Financeiro f ON r.data = f.data AND r.filial_id = f.id;

-- 2. VIEW PARA ANALISE DE KPIs (Performance Pura)
CREATE OR REPLACE VIEW moto_car.view_kpis_executivos AS
SELECT 
    data, filial_id,
    lucro_liquido,
    rec_liquida,
    -- Margens (%)
    CASE WHEN rec_liquida > 0 THEN (lucro_bruto / rec_liquida) * 100 ELSE 0 END as margem_bruta,
    CASE WHEN rec_liquida > 0 THEN (resultado_operacional / rec_liquida) * 100 ELSE 0 END as margem_operacional,
    CASE WHEN rec_liquida > 0 THEN (lucro_liquido / rec_liquida) * 100 ELSE 0 END as margem_liquida,
    -- EBITDA (Aprox: Resultado Operacional + Amortização/Depreciação se tivermos)
    resultado_operacional as ebitda,
    -- Ticket Médio (Exclusivo Motos)
    (SELECT CASE WHEN SUM(quantidade) > 0 THEN SUM(receita_bruta - devolucao) / SUM(quantidade) ELSE 0 END 
     FROM moto_car.fato_motos WHERE data = v.data AND filial_faturamento = v.filial_id) as ticket_medio_motos
FROM moto_car.view_consolidada_dre v;

-- 3. CÁLCULO DE ORÇAMENTO (Real vs Orçado)
CREATE OR REPLACE VIEW moto_car.view_real_vs_orcado AS
SELECT 
    o.data, o.filial_id, o.conta_id,
    o.valor_orcado,
    COALESCE(r.lucro_liquido, 0) as valor_real, -- Simulação: Compara lucro liquido com orçamento global
    (COALESCE(r.lucro_liquido, 0) - o.valor_orcado) as desvio_absoluto,
    CASE WHEN o.valor_orcado > 0 THEN (COALESCE(r.lucro_liquido, 0) / o.valor_orcado) * 100 ELSE 0 END as atingimento_perc
FROM moto_car.fato_orcamento o
LEFT JOIN moto_car.view_consolidada_dre r ON o.data = r.data AND o.filial_id = r.filial_id;
