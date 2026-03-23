-- ============================================
-- MOTO CAR BI - STAR SCHEMA REFINADO
-- Fatos e Dimensões conforme PRD de Diretoria
-- ============================================

-- 1. DIMENSÕES (O Contexto)

CREATE TABLE IF NOT EXISTS moto_car.dim_filial (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome_filial TEXT NOT NULL,
    estado CHAR(2),
    cidade TEXT
);

CREATE TABLE IF NOT EXISTS moto_car.dim_vendedor (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome_vendedor TEXT NOT NULL,
    filial_id UUID REFERENCES moto_car.dim_filial(id),
    ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS moto_car.dim_conta (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    codigo_dre TEXT UNIQUE, -- Ex: 1.1, 1.2, 2.1...
    nome_conta TEXT NOT NULL,
    tipo_conta TEXT CHECK (tipo_conta IN ('Receita', 'Custo', 'Despesa', 'Financeiro')),
    nivel INTEGER -- Nível na hierarquia do DRE
);

CREATE TABLE IF NOT EXISTS moto_car.dim_data (
    data DATE PRIMARY KEY,
    ano INTEGER,
    mes INTEGER,
    nome_mes TEXT,
    ano_mes TEXT,
    periodo_anterior DATE -- Referência para YoY (Year over Year)
);

-- 2. FATOS (Os Acontecimentos / Transações)

CREATE TABLE IF NOT EXISTS moto_car.fato_motos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    data DATE REFERENCES moto_car.dim_data(data),
    filial_faturamento UUID REFERENCES moto_car.dim_filial(id),
    filial_venda UUID REFERENCES moto_car.dim_filial(id),
    vendedor_id UUID REFERENCES moto_car.dim_vendedor(id),
    receita_bruta DECIMAL(12,2) DEFAULT 0,
    devolucao DECIMAL(12,2) DEFAULT 0,
    custo DECIMAL(12,2) DEFAULT 0,
    quantidade INTEGER DEFAULT 1
);

CREATE TABLE IF NOT EXISTS moto_car.fato_pecas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    data DATE REFERENCES moto_car.dim_data(data),
    filial_id UUID REFERENCES moto_car.dim_filial(id),
    receita_bruta DECIMAL(12,2) DEFAULT 0,
    devolucao DECIMAL(12,2) DEFAULT 0,
    custo DECIMAL(12,2) DEFAULT 0
);

CREATE TABLE IF NOT EXISTS moto_car.fato_despesas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    data DATE REFERENCES moto_car.dim_data(data),
    filial_id UUID REFERENCES moto_car.dim_filial(id),
    categoria_despesa TEXT CHECK (categoria_despesa IN ('Comercial', 'Administrativa', 'Pessoal')),
    valor DECIMAL(12,2) DEFAULT 0
);

CREATE TABLE IF NOT EXISTS moto_car.fato_financeiro (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    data DATE REFERENCES moto_car.dim_data(data),
    filial_id UUID REFERENCES moto_car.dim_filial(id),
    receita_financeira DECIMAL(12,2) DEFAULT 0,
    despesa_financeira DECIMAL(12,2) DEFAULT 0
);

CREATE TABLE IF NOT EXISTS moto_car.fato_orcamento (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    data DATE REFERENCES moto_car.dim_data(data),
    filial_id UUID REFERENCES moto_car.dim_filial(id),
    conta_id UUID REFERENCES moto_car.dim_conta(id),
    valor_orcado DECIMAL(12,2) DEFAULT 0
);

-- ============================================
-- VIEWS DE INTELIGÊNCIA (Medidas Automáticas)
-- ============================================

-- View para o DRE Gerencial Consolidado
CREATE OR REPLACE VIEW moto_car.view_dre_gerencial AS
SELECT 
    d.ano,
    d.nome_mes,
    f.id as filial_id,
    -- Cálculos de Receita
    (SELECT SUM(receita_bruta - devolucao) FROM moto_car.fato_motos WHERE data = d.data AND filial_faturamento = f.id) as rec_liq_motos,
    (SELECT SUM(receita_bruta - devolucao) FROM moto_car.fato_pecas WHERE data = d.data AND filial_id = f.id) as rec_liq_pecas
    -- (Aqui entrarão as outras linhas do DRE no Passo 3)
FROM moto_car.dim_data d, moto_car.dim_filial f;
