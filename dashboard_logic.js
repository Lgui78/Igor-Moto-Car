/**
 * ⚡ AIOS-MASTER ACTIVATED | MOTO CAR ELITE BI
 * @author Antigravity (Master Mode)
 * @version 2.0.0-PRO
 */

const PÁGINAS = {
    executiva: {
        title: "Visão Executiva (BI Cockpit)",
        desc: "Performance Consolidada e Tendência de Faturamento",
        content: `
            <div class="card-grid animate-slide-up" style="margin-bottom: 24px;">
                <div class="glass stat-card">
                    <div class="stat-info"><p>RECEITA MENSAL</p><h3 class="value glow">R$ 2.45M</h3><span class="delta success">↑ 14% vs meta</span></div>
                </div>
                <div class="glass stat-card">
                    <div class="stat-info"><p>LUCRO LÍQUIDO</p><h3 class="value glow">R$ 420k</h3><span class="delta success">↑ 8% vs Fev</span></div>
                </div>
                <div class="glass stat-card">
                    <div class="stat-info"><p>TICKET MÉDIO</p><h3 class="value">R$ 18.2k</h3><span class="status healthy">ESTÁVEL</span></div>
                </div>
                <div class="glass stat-card">
                    <div class="stat-info"><p>RETORNO (ROI)</p><h3 class="value glow">12.4%</h3><span class="delta success">↑ Meta Batida</span></div>
                </div>
            </div>

            <div class="main-grid" style="grid-template-columns: 1.5fr 1fr; gap: 24px;">
                <div class="glass" style="height: 480px; padding: 24px;">
                    <div class="section-header">
                        <h3 style="font-weight: 800;"><i data-lucide="trending-up" style="color: var(--accent); vertical-align: middle;"></i> Tendência de Faturamento Mensal (YoY)</h3>
                    </div>
                    <canvas id="chartFaturamentoMensal"></canvas>
                </div>
                <div class="glass" style="padding: 24px;">
                    <div class="section-header">
                        <h3 style="font-weight: 800;">Participação por Filial</h3>
                    </div>
                    <div class="table-container">
                        <table class="dre-table">
                            <thead><tr><th>FILIAL</th><th>CONTRIBUIÇÃO</th><th>SAÚDE</th></tr></thead>
                            <tbody>
                                <tr class="interactive" onclick="switchPage('filiais')"><td>Centro (Matriz)</td><td>55%</td><td>🟢 EXCEPCIONAL</td></tr>
                                <tr class="interactive" onclick="switchPage('filiais')"><td>Norte</td><td>30%</td><td>🟢 OK</td></tr>
                                <tr class="interactive" onclick="switchPage('filiais')"><td>Sul</td><td>15%</td><td>🟡 ALERTA</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="ai-insight-card" style="margin-top: 24px;">
                        <p style="font-size: 0.8rem;"><i data-lucide="sparkles"></i> <strong>Moto AI:</strong> Recomendamos reforço de estoque na Filial Norte para suportar o crescimento de 15% projetado para Abril.</p>
                    </div>
                </div>
            </div>
        `
    },
    dre: {
        title: "DRE Gerencial",
        desc: "Resultado Líquido do Grupo e Visão de Margem",
        content: `
            <div class="card-grid">
                <div class="glass stat-card">
                    <p class="label">RB BRUTA</p>
                    <h3 class="value glow">R$ 2.450.000</h3>
                </div>
                <div class="glass stat-card">
                    <p class="label">IMPOSTOS / DED</p>
                    <h3 class="value danger">R$ (310.000)</h3>
                </div>
                <div class="glass stat-card">
                    <p class="label">LB LÍQUIDO</p>
                    <h3 class="value success">R$ 1.250.000</h3>
                </div>
                <div class="glass stat-card">
                    <p class="label">MARGEM %</p>
                    <h3 class="value glow">51%</h3>
                </div>
            </div>

            <div class="glass card-detailed">
                <div class="card-header">
                    <h3>Detalhamento Contábil (Cliques na linha para ver participação)</h3>
                </div>
                <div class="table-container">
                    <table class="dre-table">
                        <thead>
                            <tr>
                                <th>CONTA</th>
                                <th>MARÇO 2026</th>
                                <th>PART. GRUPO %</th>
                                <th>VERSUS FEVEREIRO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="interactive" onclick="openParticipation('Receita de Vendas - Motos', 1500000)">
                                <td>(+) Receita de Vendas - Motos</td>
                                <td>R$ 1.500.000</td>
                                <td>61%</td>
                                <td class="success">↑ 12.5%</td>
                            </tr>
                            <tr class="interactive" onclick="openParticipation('Receita de Peças & Acc', 450000)">
                                <td>(+) Receita de Peças & Acc</td>
                                <td>R$ 450.000</td>
                                <td>18%</td>
                                <td class="success">↑ 5.2%</td>
                            </tr>
                            <tr class="section-divider">
                                <td>(=) RECEITA BRUTA OPERACIONAL</td>
                                <td class="glow">R$ 2.450.000</td>
                                <td>100%</td>
                                <td>-</td>
                            </tr>
                            <tr class="interactive" onclick="openParticipation('Impostos e Deduções', -310000)">
                                <td>(-) Impostos e Deduções</td>
                                <td class="danger">R$ (310.000)</td>
                                <td>-12.6%</td>
                                <td class="danger">↓ 2.1%</td>
                            </tr>
                            <tr class="interactive" onclick="openParticipation('Custos Variáveis', -890000)">
                                <td>(-) CMV (Custo de Mercadoria)</td>
                                <td class="danger">R$ (890.000)</td>
                                <td>-36.3%</td>
                                <td class="danger">↓ 4.8%</td>
                            </tr>
                            <tr class="section-divider">
                                <td>(=) LUCRO BRUTO OPERACIONAL</td>
                                <td class="glow">R$ 1.250.000</td>
                                <td>51%</td>
                                <td>-</td>
                            </tr>
                            <tr class="interactive" onclick="openParticipation('Despesas Comerciais', -120000)">
                                <td>(-) Despesas Comerciais</td>
                                <td class="danger">R$ (120.000)</td>
                                <td>-4.9%</td>
                                <td class="success">↑ 1.5%</td>
                            </tr>
                            <tr class="interactive" onclick="openParticipation('Despesas Administrativas', -230000)">
                                <td>(-) Despesas Administrativas</td>
                                <td class="danger">R$ (230.000)</td>
                                <td>-9.3%</td>
                                <td class="success">↑ 0.8%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    comercial: {
        title: "Vendas de Motos (Dashboard Modelos)",
        desc: "Performance por Modelos, Devoluções e CMC",
        content: `
            <div class="card-grid">
                <div class="glass stat-card">
                    <p class="label">UNIDADES VENDIDAS</p>
                    <h3 class="value glow">142</h3>
                </div>
                <div class="glass stat-card">
                    <p class="label">TICKET MÉDIO</p>
                    <h3 class="value success">R$ 18.250</h3>
                </div>
                <div class="glass stat-card">
                    <p class="label">DEVOLUÇÕES %</p>
                    <h3 class="value danger">3.1%</h3>
                </div>
                <div class="glass stat-card">
                    <p class="label">MARGEM MÉDIA</p>
                    <h3 class="value glow">14.2%</h3>
                </div>
            </div>

            <div class="glass card-detailed">
                <div class="card-header">
                    <h3>Performance por Modelo (Ranking de Rentabilidade)</h3>
                </div>
                <div class="table-container">
                    <table class="dre-table">
                        <thead>
                            <tr>
                                <th>MODELO / SÉRIE</th>
                                <th>QTDE</th>
                                <th>VLR. VENDA</th>
                                <th>DEV. / CANC</th>
                                <th>CMC (Custo)</th>
                                <th>LUCRO (R$)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>NXR 160 BROS ESDD</td>
                                <td>43</td>
                                <td>R$ 840.000</td>
                                <td class="danger">1</td>
                                <td>R$ 680.000</td>
                                <td class="success">R$ 160.000</td>
                            </tr>
                            <tr>
                                <td>CG 160 FAN</td>
                                <td>58</td>
                                <td>R$ 980.000</td>
                                <td class="danger">3</td>
                                <td>R$ 810.000</td>
                                <td class="success">R$ 170.000</td>
                            </tr>
                            <tr>
                                <td>XRE 300 SAHARA</td>
                                <td>15</td>
                                <td>R$ 480.000</td>
                                <td>0</td>
                                <td>R$ 390.000</td>
                                <td class="success">R$ 90.000</td>
                            </tr>
                            <tr>
                                <td>BIZ 125</td>
                                <td>26</td>
                                <td>R$ 340.000</td>
                                <td class="danger">1</td>
                                <td>R$ 285.000</td>
                                <td class="success">R$ 55.000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    pecas: {
        title: "Curva ABC: Peças & Acessórios",
        desc: "Inteligência de Inventário e Giro Financeiro",
        content: `
            <div class="card-grid">
                <div class="glass stat-card">
                    <p class="label">VALOR EM ESTOQUE</p>
                    <h3 class="value glow">R$ 1.84M</h3>
                </div>
                <div class="glass stat-card">
                    <p class="label">GIRO MENSAL</p>
                    <h3 class="value success">4.2x</h3>
                </div>
                <div class="glass stat-card">
                    <p class="label">MARGEM ABC (A)</p>
                    <h3 class="value glow">42%</h3>
                </div>
                <div class="glass stat-card">
                    <p class="label">RUPTURAS</p>
                    <h3 class="value danger">1.2%</h3>
                </div>
            </div>

            <div class="glass card-detailed">
                <div class="card-header">
                    <h3>Análise Curva ABC (Mês Corrente)</h3>
                </div>
                <div class="table-container">
                    <table class="dre-table">
                        <thead>
                            <tr>
                                <th>CURVA</th>
                                <th>ITEM / REFERÊNCIA</th>
                                <th>VND. ACUMULADA</th>
                                <th>SHARE RECO %</th>
                                <th>MARGEM BRUTA</th>
                                <th>ESTOQUE FÍSICO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="status active" style="background: rgba(249,115,22,0.2); color: var(--accent); padding: 4px 8px; border-radius: 4px; font-weight:800;">A</span></td>
                                <td>Pneu Pirelli MT60 - 110/90</td>
                                <td>R$ 45.300</td>
                                <td>18.2%</td>
                                <td class="success">42%</td>
                                <td>142 un</td>
                            </tr>
                            <tr>
                                <td><span class="status active" style="background: rgba(249,115,22,0.2); color: var(--accent); padding: 4px 8px; border-radius: 4px; font-weight:800;">A</span></td>
                                <td>Kit Transmissão Honda Original</td>
                                <td>R$ 38.100</td>
                                <td>15.4%</td>
                                <td class="success">35%</td>
                                <td>89 un</td>
                            </tr>
                            <tr>
                                <td><span class="status active" style="background: rgba(99,102,241,0.2); color: #818cf8; padding: 4px 8px; border-radius: 4px; font-weight:800;">B</span></td>
                                <td>Capacete LS2 Stream Evo</td>
                                <td>R$ 12.400</td>
                                <td>5.1%</td>
                                <td class="success">48%</td>
                                <td>34 un</td>
                            </tr>
                            <tr>
                                <td><span class="status active" style="background: rgba(255,255,255,0.05); color: #94a3b8; padding: 4px 8px; border-radius: 4px; font-weight:800;">C</span></td>
                                <td>Lâmpada de Farol (Genérica)</td>
                                <td>R$ 1.200</td>
                                <td>0.4%</td>
                                <td class="danger">18%</td>
                                <td>412 un</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    despesas: {
        title: "Análise de Despesas",
        desc: "Centro de Custo e Evolução Temporal",
        content: `
            <div class="ai-insight-card animate-slide-up" style="border-left-color: var(--negative)">
                <div class="ai-header"><i data-lucide="alert-triangle"></i> <strong>IA Financeira:</strong> Controle de Gastos</div>
                <p>As despesas de 'Pessoal' subiram 12% sem aumento proporcional na receita na Filial Sul. Recomendo congelamento de novas contratações até o próximo ciclo.</p>
            </div>
            <div class="main-grid" style="grid-template-columns: 1fr 1fr">
                <div class="glass"><div class="section-header"><h3>Breakdown por Categoria</h3></div><canvas id="chartDespesasPizza"></canvas></div>
                <div class="glass"><div class="section-header"><h3>Evolução de Custos Fixos</h3></div><canvas id="chartDespesasLinha"></canvas></div>
            </div>
        `
    },
    filiais: {
        title: "Performance por Filiais",
        desc: "Comparativo de unidades e Lucratividade",
        content: `
            <div class="glass card-detailed">
                <div class="card-header">
                    <h3>Ranking de Performance Pro (KPIs de Resultado)</h3>
                </div>
                <div class="table-container">
                    <table class="dre-table">
                        <thead>
                            <tr>
                                <th>FILIAL / UNIDADE</th>
                                <th>FATURAMENTO (RB)</th>
                                <th>EBITDA (R$)</th>
                                <th>ROI %</th>
                                <th>LUCRATIVIDADE %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="interactive">
                                <td>Filial Centro (Matriz)</td>
                                <td>R$ 1.450.000</td>
                                <td>R$ 280.000</td>
                                <td class="glow">32%</td>
                                <td class="success">12.5%</td>
                            </tr>
                            <tr class="interactive">
                                <td>Filial Norte</td>
                                <td>R$ 820.000</td>
                                <td>R$ 110.000</td>
                                <td class="glow">28%</td>
                                <td class="success">8.4%</td>
                            </tr>
                            <tr class="interactive">
                                <td>Filial Sul</td>
                                <td>R$ 610.000</td>
                                <td>R$ 45.000</td>
                                <td class="glow">18%</td>
                                <td class="danger">3.1%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    sazonalidade: {
        title: "Sazonalidade (Análise YoY)",
        desc: "Comparativo Histórico: 2026 vs 2025",
        content: `
            <div class="ai-insight-card animate-slide-up">
                <div class="ai-header"><i data-lucide="calendar"></i> <strong>IA Preditiva:</strong> Sazonalidade</div>
                <p>Historicamente, o mês de Junho apresenta alta de 20% pela proximidade das férias. Sugiro reforçar o estoque de pneus e kits de viagem agora em Maio.</p>
            </div>
            <div class="glass" style="height: 450px"><canvas id="chartSazonalidade"></canvas></div>
        `
    },
    orcamento: {
        title: "Acompanhamento Orçamentário",
        desc: "Análise de Desvios (Realizado vs Planejado)",
        content: `
            <div class="glass filter-bar" style="margin-bottom: 20px; display: flex; gap: 15px; align-items: center; padding: 15px;">
                <span style="font-size: 0.9rem; font-weight: 600;">FILTRAR CONTA:</span>
                <select id="orcamentoFiltroConta" class="glass-select" style="background: rgba(255,255,255,0.05); color: #fff; border: 1px solid var(--glass-border); padding: 5px 15px; border-radius: 4px;">
                    <option value="todas">Todas as Despesas</option>
                    <option value="pessoal">Folha de Pagamento (Pessoal)</option>
                    <option value="marketing">Investimento Marketing</option>
                    <option value="aluguel">Aluguel e Infra</option>
                    <option value="comercial">Despesas Comerciais</option>
                </select>
                <div class="glow-tag">LIVE FEED</div>
            </div>

            <div class="glass" style="height: 400px; padding: 20px;">
                <div class="card-header">
                    <h3>Realizado vs Orçado - Março 2026</h3>
                </div>
                <canvas id="chartOrcamento"></canvas>
            </div>

            <div class="glass" style="margin-top: 20px; padding: 20px;">
                <div class="section-header">
                    <h3>Detalhamento de Desvios por Centro de Custo</h3>
                </div>
                <div class="table-container">
                    <table class="dre-table">
                        <thead>
                            <tr>
                                <th>CENTRO DE CUSTO</th>
                                <th>ORÇADO</th>
                                <th>REALIZADO</th>
                                <th>DESVIO R$</th>
                                <th>EFICIÊNCIA %</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pessoal / RH</td>
                                <td>R$ 150.000</td>
                                <td class="danger">R$ 168.000</td>
                                <td class="danger">- R$ 18.000</td>
                                <td class="danger">-12%</td>
                            </tr>
                            <tr>
                                <td>Marketing Digital</td>
                                <td>R$ 45.000</td>
                                <td class="success">R$ 42.000</td>
                                <td class="success">+ R$ 3.000</td>
                                <td class="success">106%</td>
                            </tr>
                            <tr>
                                <td>Infra / Aluguel</td>
                                <td>R$ 30.000</td>
                                <td>R$ 30.000</td>
                                <td>R$ 0</td>
                                <td>100%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    }
};

/** LÓGICA DE DETALHES (Passo 7) **/
function openDetails(type, name) {
    const overlay = document.getElementById('detailOverlay');
    const title = document.getElementById('detailTitle');
    const body = document.getElementById('detailBody');
    
    title.innerText = `Análise 360º: ${type.toUpperCase()} - ${name}`;
    overlay.style.display = 'flex';

    body.innerHTML = `
        <div class="dashboard-stats">
            <div class="stat-card glass"><div class="stat-info"><p class="label">Meta Mensal</p><h2 class="value">R$ 500k</h2></div></div>
            <div class="stat-card glass"><div class="stat-info"><p class="label">Produtividade</p><h2 class="value">98.2%</h2></div></div>
            <div class="stat-card glass"><div class="stat-info"><p class="label">Qualidade</p><h2 class="value">4.9/5</h2></div></div>
        </div>
        <div class="glass" style="height: 350px"><canvas id="detailChart"></canvas></div>
    `;

    setTimeout(() => {
        const ctx = document.getElementById('detailChart');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['S1', 'S2', 'S3', 'S4'],
                datasets: [{ label: 'Performance Semanal', data: [80, 120, 110, 130], borderColor: '#ff6b00', tension: 0.4 }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
        lucide.createIcons();
    }, 100);
}

function closeDetails() {
    document.getElementById('detailOverlay').style.display = 'none';
}

/** LÓGICA DE EXPORTAÇÃO (Passo 8) **/
/* --------------------------------------------------------------------------
   FUNÇÕES DE PARTICIPAÇÃO E DRILDOWN (PARTE 1)
   -------------------------------------------------------------------------- */
function openParticipation(conta, valor) {
    const format = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);
    
    const branches = [
        { name: "Filial Centro (Matriz)", part: 0.55, color: "var(--accent)" },
        { name: "Filial Norte", part: 0.30, color: "var(--primary)" },
        { name: "Filial Sul", part: 0.15, color: "var(--success)" }
    ];

    const list = document.getElementById('participationList');
    list.innerHTML = `
        <div style="margin-bottom: 25px; border-bottom: 1px solid var(--glass-border); padding-bottom: 15px;">
            <p style="color: var(--text-secondary); font-size: 0.75rem; letter-spacing: 1px;">ORIGEM DO VALOR</p>
            <h4 style="font-size: 1.2rem; margin: 5px 0;">${conta}</h4>
            <h2 class="glow" style="font-size: 1.8rem;">${format(valor)}</h2>
        </div>
    `;

    branches.forEach(b => {
        const itemVal = Math.abs(valor * b.part);
        list.innerHTML += `
            <div class="participation-item">
                <div class="branch-info">
                    <span style="font-weight: 600;">${b.name}</span>
                    <span class="glow">${format(itemVal)}</span>
                </div>
                <div class="progress-track">
                    <div class="progress-fill" style="width: ${b.part * 100}%; background: ${b.color};"></div>
                </div>
                <p style="font-size: 0.7rem; color: var(--text-secondary); margin-top: 4px;">Share: ${(b.part * 100).toFixed(1)}%</p>
            </div>
        `;
    });

    document.getElementById('sideParticipationPanel').classList.add('active');
}

function closeParticipation() {
    document.getElementById('sideParticipationPanel').classList.remove('active');
}

function logout() {
    localStorage.removeItem('motocar_session');
    location.href = 'login.html';
}

// Global Filter Listeners - Reatribui lógica de renderização
document.addEventListener('DOMContentLoaded', () => {
    ['filtroMes', 'filtroFilial', 'filtroData'].forEach(id => {
        const el = document.getElementById(id);
        if(el) {
            el.addEventListener('change', () => {
                console.log(`Global Filter Updated: ${id} -> ${el.value}`);
                // Aqui o Dashboard re-renderizaria os dados dinâmicos baseados no filtro
                switchPage(window.currentPage || 'executiva');
            });
        }
    });
});

function exportData(format) {
    const pageTitle = document.getElementById('currentPageTitle').innerText;
    alert(`🎯 Relatório Corporativo Gerado!\n\nDocumento: ${pageTitle}\nFormato: ${format}\nStatus: Pronto para download em Alta Definição.`);
}

function switchPage(pageKey) {
    const page = PÁGINAS[pageKey];
    if (!page) return;

    // Atualiza Sidebar
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    // Encontrar o link correto baseado no texto do onclick
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.getAttribute('onclick')?.includes(pageKey)) {
            item.classList.add('active');
        }
    });

    // Atualiza Conteúdo
    document.getElementById('currentPageTitle').innerText = page.title;
    document.getElementById('currentPageDesc').innerText = page.desc;
    document.getElementById('pageContainer').innerHTML = page.content;
    window.currentPage = pageKey;
    
    // Auto-close overlay on page change
    closeParticipation();

    // Inicializa Gráficos se necessário
    if (pageKey === 'executiva') initFaturamentoChart();
    if (pageKey === 'sazonalidade') initSazonalidadeChart();
    if (pageKey === 'orcamento') initOrcamentoChart();
    if (pageKey === 'despesas') initDespesasCharts();
    
    lucide.createIcons();
    window.scrollTo(0,0);
}

function initFaturamentoChart() {
    const ctx = document.getElementById('chartFaturamentoMensal');
    if (!ctx) return;
    
    // 🎨 Efeito Neon Linear Gradient (Laranja Brilhante do Motor)
    const ctx2d = ctx.getContext('2d');
    const gradientVivo = ctx2d.createLinearGradient(0, 0, 0, 400);
    gradientVivo.addColorStop(0, 'rgba(249, 115, 22, 1)');
    gradientVivo.addColorStop(1, 'rgba(249, 115, 22, 0.1)');

    const gradientMeta = ctx2d.createLinearGradient(0, 0, 0, 400);
    gradientMeta.addColorStop(0, 'rgba(71, 85, 105, 0.6)');
    gradientMeta.addColorStop(1, 'rgba(30, 41, 59, 0.2)');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Realizado (R$M) 🚀',
                data: [1.8, 2.1, 2.45, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: gradientVivo,
                borderColor: 'rgba(249, 115, 22, 1)',
                borderWidth: 2,
                borderRadius: 8,
                hoverBackgroundColor: '#fff',
                barPercentage: 0.6
            }, {
                label: 'Meta/2025 (R$M)',
                data: [1.6, 1.9, 2.2, 2.3, 2.1, 2.5, 2.6, 2.4, 2.3, 2.5, 2.7, 3.0],
                backgroundColor: gradientMeta,
                borderColor: 'rgba(100, 116, 139, 0.3)',
                borderWidth: 1,
                borderRadius: 8,
                barPercentage: 0.6
            }]
        },
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            scales: {
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
            },
            plugins: { legend: { labels: { color: '#fff', font: { family: 'Outfit', size: 13 } } } },
            animation: { duration: 2000, easing: 'easeOutQuart' }
        }
    });
}

function initSazonalidadeChart() {
    const ctx = document.getElementById('chartSazonalidade');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [
                { label: '2026 (Atual)', data: [1200, 1450, 1100, 1800, 1750, 1900], backgroundColor: '#ff6b00' },
                { label: '2025 (Anterior)', data: [1000, 1100, 950, 1400, 1500, 1600], backgroundColor: 'rgba(255,255,255,0.1)' }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#fff' } } } }
    });
}

function initOrcamentoChart() {
    const ctx = document.getElementById('chartOrcamento');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [
                { label: 'Realizado', data: [420, 390, 450, 480, 510, 550], borderColor: '#10b981', tension: 0.3 },
                { label: 'Orçado', data: [350, 380, 400, 450, 500, 540], borderColor: '#f1f1f1', borderDash: [5, 5], tension: 0.3 }
            ]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#fff' } } } }
    });
}

function initDespesasCharts() {
    const ctxPizza = document.getElementById('chartDespesasPizza');
    if (ctxPizza) {
        new Chart(ctxPizza, {
            type: 'doughnut',
            data: {
                labels: ['Pessoal', 'Adm', 'Comercial'],
                datasets: [{ data: [45, 30, 25], backgroundColor: ['#6366f1', '#ff6b00', '#f59e0b'] }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: '#fff' } } } }
        });
    }
}

// Inicializa na página executiva
document.addEventListener('DOMContentLoaded', () => {
    switchPage('executiva');
});
