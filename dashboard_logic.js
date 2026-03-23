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
                <div class="glass stat-card" style="border-left:4px solid var(--accent);padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Receita Bruta</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;" class="glow">R$ 2.45M</h3>
                    <span style="font-size:0.78rem;color:var(--positive);font-weight:700;">↑ +14% vs Fev/26</span>
                </div>
                <div class="glass stat-card" style="border-left:4px solid var(--negative);padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Impostos / Ded.</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;color:var(--negative);">R$ (310k)</h3>
                    <span style="font-size:0.78rem;color:var(--negative);font-weight:700;">↓ 2.1% monitorar</span>
                </div>
                <div class="glass stat-card" style="border-left:4px solid var(--positive);padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Lucro Bruto</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;color:var(--positive);">R$ 1.25M</h3>
                    <span style="font-size:0.78rem;color:var(--positive);font-weight:700;">↑ +8% vs Fev/26</span>
                </div>
                <div class="glass stat-card" style="border-left:4px solid #a855f7;padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Margem Líq. %</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;" class="glow">51%</h3>
                    <span style="font-size:0.78rem;color:#a855f7;font-weight:700;">✅ Meta: 45%</span>
                </div>
            </div>

            <div class="glass card-detailed">
                <div class="card-header" style="padding:20px 28px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between;">
                    <h3 style="font-size:1rem;font-weight:800;">📊 DRE Gerencial — Detalhamento Contábil</h3>
                    <span style="font-size:0.75rem;color:var(--text-secondary);">Clique na linha para ver participação por filial</span>
                </div>
                <div style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;font-size:0.88rem;">
                        <thead>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;white-space:nowrap;">CONTA</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;white-space:nowrap;">MARÇO 2026</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;white-space:nowrap;">PART. GRUPO %</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;white-space:nowrap;">VS FEVEREIRO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="cursor:pointer;transition:background 0.2s;" onmouseenter="this.style.background='rgba(249,115,22,0.06)'" onmouseleave="this.style.background='transparent'" onclick="openParticipation('Receita de Vendas - Motos', 1500000)">
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);font-weight:500;">(+) Receita de Vendas – Motos</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);font-weight:600;">R$ 1.500.000</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--text-secondary);">61%</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--positive);font-weight:700;">↑ 12.5%</td>
                            </tr>
                            <tr style="cursor:pointer;transition:background 0.2s;" onmouseenter="this.style.background='rgba(249,115,22,0.06)'" onmouseleave="this.style.background='transparent'" onclick="openParticipation('Receita de Peças & Acc', 450000)">
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);font-weight:500;">(+) Receita de Peças & Acc</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);font-weight:600;">R$ 450.000</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--text-secondary);">18%</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--positive);font-weight:700;">↑ 5.2%</td>
                            </tr>
                            <tr style="background:rgba(249,115,22,0.08);border-top:1px solid rgba(249,115,22,0.2);">
                                <td style="padding:14px 20px;color:var(--accent);font-weight:800;">(=) RECEITA BRUTA OPERACIONAL</td>
                                <td style="padding:14px 20px;color:var(--accent);font-weight:800;" class="glow">R$ 2.450.000</td>
                                <td style="padding:14px 20px;color:var(--accent);font-weight:700;">100%</td>
                                <td style="padding:14px 20px;color:var(--text-secondary);">—</td>
                            </tr>
                            <tr style="cursor:pointer;transition:background 0.2s;" onmouseenter="this.style.background='rgba(249,115,22,0.06)'" onmouseleave="this.style.background='transparent'" onclick="openParticipation('Impostos e Deduções', -310000)">
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);font-weight:500;">(-) Impostos e Deduções</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--negative);font-weight:600;">R$ (310.000)</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--text-secondary);">-12.6%</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--negative);font-weight:700;">↓ 2.1%</td>
                            </tr>
                            <tr style="cursor:pointer;transition:background 0.2s;" onmouseenter="this.style.background='rgba(249,115,22,0.06)'" onmouseleave="this.style.background='transparent'" onclick="openParticipation('Custos Variáveis', -890000)">
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);font-weight:500;">(-) CMV — Custo de Mercadoria</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--negative);font-weight:600;">R$ (890.000)</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--text-secondary);">-36.3%</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--negative);font-weight:700;">↓ 4.8%</td>
                            </tr>
                            <tr style="background:rgba(16,185,129,0.08);border-top:1px solid rgba(16,185,129,0.2);">
                                <td style="padding:14px 20px;color:var(--positive);font-weight:800;">(=) LUCRO BRUTO OPERACIONAL</td>
                                <td style="padding:14px 20px;color:var(--positive);font-weight:800;">R$ 1.250.000</td>
                                <td style="padding:14px 20px;color:var(--positive);font-weight:700;">51%</td>
                                <td style="padding:14px 20px;color:var(--text-secondary);">—</td>
                            </tr>
                            <tr style="cursor:pointer;transition:background 0.2s;" onmouseenter="this.style.background='rgba(249,115,22,0.06)'" onmouseleave="this.style.background='transparent'" onclick="openParticipation('Despesas Comerciais', -120000)">
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);font-weight:500;">(-) Despesas Comerciais</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--negative);font-weight:600;">R$ (120.000)</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--text-secondary);">-4.9%</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--positive);font-weight:700;">↑ 1.5%</td>
                            </tr>
                            <tr style="cursor:pointer;transition:background 0.2s;" onmouseenter="this.style.background='rgba(249,115,22,0.06)'" onmouseleave="this.style.background='transparent'" onclick="openParticipation('Despesas Administrativas', -230000)">
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);font-weight:500;">(-) Despesas Administrativas</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--negative);font-weight:600;">R$ (230.000)</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--text-secondary);">-9.3%</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--positive);font-weight:700;">↑ 0.8%</td>
                            </tr>
                            <tr style="background:rgba(99,102,241,0.1);border-top:1px solid rgba(99,102,241,0.3);">
                                <td style="padding:16px 20px;color:#818cf8;font-weight:800;font-size:1rem;">(=) LUCRO LÍQUIDO</td>
                                <td style="padding:16px 20px;color:#818cf8;font-weight:800;font-size:1rem;">R$ 420.000</td>
                                <td style="padding:16px 20px;color:#818cf8;font-weight:700;">17.1%</td>
                                <td style="padding:16px 20px;color:var(--positive);font-weight:800;">↑ +8%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    comercial: {
        title: "Vendas de Motos 🏆",
        desc: "Performance por Modelos, Devoluções e Rentabilidade",
        content: `
            <div class="card-grid">
                <div class="glass stat-card" style="border-left:4px solid var(--accent);padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Unidades Vendidas</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;" class="glow">142</h3>
                    <span style="font-size:0.78rem;color:var(--positive);font-weight:700;">↑ 19% vs mês anterior</span>
                </div>
                <div class="glass stat-card" style="border-left:4px solid var(--positive);padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Ticket Médio</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;color:var(--positive);">R$ 18.250</h3>
                    <span style="font-size:0.78rem;color:var(--positive);font-weight:700;">↑ Estável</span>
                </div>
                <div class="glass stat-card" style="border-left:4px solid #a855f7;padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Margem Média</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;color:#a855f7;">14.2%</h3>
                    <span style="font-size:0.78rem;color:#a855f7;font-weight:700;">↑ Meta: 12%</span>
                </div>
                <div class="glass stat-card" style="border-left:4px solid var(--negative);padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Devoluções</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;color:var(--negative);">3.1%</h3>
                    <span style="font-size:0.78rem;color:var(--negative);font-weight:700;">↓ Monitorar</span>
                </div>
            </div>

            <div class="glass card-detailed">
                <div style="padding:20px 28px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between;">
                    <h3 style="font-size:1rem;font-weight:800;">🏆 Ranking de Rentabilidade por Modelo</h3>
                    <span style="font-size:0.75rem;color:var(--text-secondary);">Março 2026</span>
                </div>
                <div style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;font-size:0.88rem;">
                        <thead>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;">#</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;">MODELO / SÉRIE</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;">QTDE</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;">RECEITA</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;">CMC</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;">LUCRO</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;">MARGEM</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;">DEV.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="transition:background 0.2s;border-bottom:1px solid rgba(255,255,255,0.04);" onmouseenter="this.style.background='rgba(249,115,22,0.05)'" onmouseleave="this.style.background='transparent'">
                                <td style="padding:14px 20px;"><span style="background:rgba(249,115,22,0.2);color:var(--accent);padding:4px 10px;border-radius:8px;font-weight:800;">🥇</span></td>
                                <td style="padding:14px 20px;font-weight:700;">CG 160 FAN</td>
                                <td style="padding:14px 20px;">58</td>
                                <td style="padding:14px 20px;font-weight:600;">R$ 980.000</td>
                                <td style="padding:14px 20px;color:var(--text-secondary);">R$ 810.000</td>
                                <td style="padding:14px 20px;color:var(--positive);font-weight:800;">R$ 170.000</td>
                                <td style="padding:14px 20px;"><span style="background:rgba(16,185,129,0.15);color:var(--positive);padding:4px 10px;border-radius:8px;font-weight:700;">17.3%</span></td>
                                <td style="padding:14px 20px;color:var(--negative);font-weight:700;">3</td>
                            </tr>
                            <tr style="transition:background 0.2s;border-bottom:1px solid rgba(255,255,255,0.04);" onmouseenter="this.style.background='rgba(99,102,241,0.05)'" onmouseleave="this.style.background='transparent'">
                                <td style="padding:14px 20px;"><span style="background:rgba(99,102,241,0.2);color:#818cf8;padding:4px 10px;border-radius:8px;font-weight:800;">🥈</span></td>
                                <td style="padding:14px 20px;font-weight:700;">NXR 160 BROS ESDD</td>
                                <td style="padding:14px 20px;">43</td>
                                <td style="padding:14px 20px;font-weight:600;">R$ 840.000</td>
                                <td style="padding:14px 20px;color:var(--text-secondary);">R$ 680.000</td>
                                <td style="padding:14px 20px;color:var(--positive);font-weight:800;">R$ 160.000</td>
                                <td style="padding:14px 20px;"><span style="background:rgba(16,185,129,0.15);color:var(--positive);padding:4px 10px;border-radius:8px;font-weight:700;">19.0%</span></td>
                                <td style="padding:14px 20px;color:var(--negative);font-weight:700;">1</td>
                            </tr>
                            <tr style="transition:background 0.2s;border-bottom:1px solid rgba(255,255,255,0.04);" onmouseenter="this.style.background='rgba(16,185,129,0.05)'" onmouseleave="this.style.background='transparent'">
                                <td style="padding:14px 20px;"><span style="background:rgba(16,185,129,0.15);color:var(--positive);padding:4px 10px;border-radius:8px;font-weight:800;">🥉</span></td>
                                <td style="padding:14px 20px;font-weight:700;">XRE 300 SAHARA</td>
                                <td style="padding:14px 20px;">15</td>
                                <td style="padding:14px 20px;font-weight:600;">R$ 480.000</td>
                                <td style="padding:14px 20px;color:var(--text-secondary);">R$ 390.000</td>
                                <td style="padding:14px 20px;color:var(--positive);font-weight:800;">R$ 90.000</td>
                                <td style="padding:14px 20px;"><span style="background:rgba(16,185,129,0.15);color:var(--positive);padding:4px 10px;border-radius:8px;font-weight:700;">18.7%</span></td>
                                <td style="padding:14px 20px;color:var(--text-secondary);">0</td>
                            </tr>
                            <tr style="transition:background 0.2s;" onmouseenter="this.style.background='rgba(255,255,255,0.02)'" onmouseleave="this.style.background='transparent'">
                                <td style="padding:14px 20px;color:var(--text-secondary);padding-left:14px;">4</td>
                                <td style="padding:14px 20px;">BIZ 125</td>
                                <td style="padding:14px 20px;">26</td>
                                <td style="padding:14px 20px;font-weight:600;">R$ 340.000</td>
                                <td style="padding:14px 20px;color:var(--text-secondary);">R$ 285.000</td>
                                <td style="padding:14px 20px;color:var(--positive);">R$ 55.000</td>
                                <td style="padding:14px 20px;"><span style="background:rgba(249,115,22,0.1);color:var(--accent);padding:4px 10px;border-radius:8px;font-weight:700;">16.2%</span></td>
                                <td style="padding:14px 20px;color:var(--negative);font-weight:700;">1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    pecas: {
        title: "Curva ABC: Peças & Acessórios 🔧",
        desc: "Inteligência de Inventário e Giro Financeiro",
        content: `
            <div class="card-grid">
                <div class="glass stat-card" style="border-left:4px solid var(--accent);padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Valor em Estoque</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;" class="glow">R$ 1.84M</h3>
                    <span style="font-size:0.78rem;color:var(--text-secondary);font-weight:600;">Total imobilizado</span>
                </div>
                <div class="glass stat-card" style="border-left:4px solid var(--positive);padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Giro Mensal</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;color:var(--positive);">4.2x</h3>
                    <span style="font-size:0.78rem;color:var(--positive);font-weight:700;">✅ Excelente giro</span>
                </div>
                <div class="glass stat-card" style="border-left:4px solid #a855f7;padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Margem ABC (A)</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;color:#a855f7;">42%</h3>
                    <span style="font-size:0.78rem;color:#a855f7;font-weight:700;">↑ Acima da meta</span>
                </div>
                <div class="glass stat-card" style="border-left:4px solid var(--negative);padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Rupturas</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;color:var(--negative);">1.2%</h3>
                    <span style="font-size:0.78rem;color:var(--negative);font-weight:700;">⚠️ Monitorar</span>
                </div>
            </div>

            <div class="glass card-detailed">
                <div style="padding:20px 28px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between;">
                    <h3 style="font-size:1rem;font-weight:800;">🔧 Análise Curva ABC — Março 2026</h3>
                    <span style="font-size:0.75rem;color:var(--text-secondary);">A = 80% do faturamento · B = Intermediário · C = Baixo giro</span>
                </div>
                <div style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;font-size:0.88rem;">
                        <thead>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;white-space:nowrap;">CURVA</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;white-space:nowrap;">ITEM / REFERÊNCIA</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;white-space:nowrap;">VND. ACUMULADA</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;white-space:nowrap;">SHARE %</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;white-space:nowrap;">MARGEM BRUTA</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;white-space:nowrap;">ESTOQUE FÍSICO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="transition:background 0.2s;" onmouseenter="this.style.background='rgba(249,115,22,0.05)'" onmouseleave="this.style.background='transparent'">
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);"><span style="background:rgba(249,115,22,0.2);color:var(--accent);padding:5px 12px;border-radius:8px;font-weight:800;font-size:0.85rem;">A</span></td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);font-weight:600;">Pneu Pirelli MT60 - 110/90</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);font-weight:600;">R$ 45.300</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--text-secondary);">18.2%</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);"><span style="background:rgba(16,185,129,0.15);color:var(--positive);padding:4px 10px;border-radius:8px;font-weight:700;">42%</span></td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--text-secondary);">142 un</td>
                            </tr>
                            <tr style="transition:background 0.2s;" onmouseenter="this.style.background='rgba(249,115,22,0.05)'" onmouseleave="this.style.background='transparent'">
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);"><span style="background:rgba(249,115,22,0.2);color:var(--accent);padding:5px 12px;border-radius:8px;font-weight:800;font-size:0.85rem;">A</span></td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);font-weight:600;">Kit Transmissão Honda Original</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);font-weight:600;">R$ 38.100</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--text-secondary);">15.4%</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);"><span style="background:rgba(16,185,129,0.15);color:var(--positive);padding:4px 10px;border-radius:8px;font-weight:700;">35%</span></td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--text-secondary);">89 un</td>
                            </tr>
                            <tr style="transition:background 0.2s;" onmouseenter="this.style.background='rgba(99,102,241,0.05)'" onmouseleave="this.style.background='transparent'">
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);"><span style="background:rgba(99,102,241,0.2);color:#818cf8;padding:5px 12px;border-radius:8px;font-weight:800;font-size:0.85rem;">B</span></td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);font-weight:600;">Capacete LS2 Stream Evo</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);font-weight:600;">R$ 12.400</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--text-secondary);">5.1%</td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);"><span style="background:rgba(16,185,129,0.15);color:var(--positive);padding:4px 10px;border-radius:8px;font-weight:700;">48%</span></td>
                                <td style="padding:14px 20px;border-bottom:1px solid rgba(255,255,255,0.04);color:var(--text-secondary);">34 un</td>
                            </tr>
                            <tr style="transition:background 0.2s;" onmouseenter="this.style.background='rgba(255,255,255,0.02)'" onmouseleave="this.style.background='transparent'">
                                <td style="padding:14px 20px;"><span style="background:rgba(255,255,255,0.06);color:#94a3b8;padding:5px 12px;border-radius:8px;font-weight:800;font-size:0.85rem;">C</span></td>
                                <td style="padding:14px 20px;color:var(--text-secondary);">Lâmpada de Farol (Genérica)</td>
                                <td style="padding:14px 20px;color:var(--text-secondary);">R$ 1.200</td>
                                <td style="padding:14px 20px;color:var(--text-secondary);">0.4%</td>
                                <td style="padding:14px 20px;"><span style="background:rgba(239,68,68,0.15);color:var(--negative);padding:4px 10px;border-radius:8px;font-weight:700;">18%</span></td>
                                <td style="padding:14px 20px;color:var(--text-secondary);">412 un</td>
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
        title: "Performance por Filiais 🏢",
        desc: "Comparativo de Unidades e Lucratividade com Indicadores Visuais",
        content: `
            <div class="card-grid">
                <div class="glass stat-card" style="border-left:4px solid var(--accent);padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Receita Total Grupo</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;" class="glow">R$ 2.88M</h3>
                    <span style="font-size:0.78rem;color:var(--positive);font-weight:700;">↑ Consolidado Mar/26</span>
                </div>
                <div class="glass stat-card" style="border-left:4px solid var(--positive);padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Melhor Unidade</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;color:var(--positive);">Matriz</h3>
                    <span style="font-size:0.78rem;color:var(--positive);font-weight:700;">↑ ROI 32% — EXCEPCIONAL</span>
                </div>
                <div class="glass stat-card" style="border-left:4px solid #f59e0b;padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">Unidade em Alerta</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;color:#f59e0b;">Filial Sul</h3>
                    <span style="font-size:0.78rem;color:#f59e0b;font-weight:700;">⚠️ Lucratividade 3.1%</span>
                </div>
                <div class="glass stat-card" style="border-left:4px solid #a855f7;padding:24px;">
                    <p style="font-size:0.72rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px;">EBITDA Grupo</p>
                    <h3 style="font-size:2rem;font-weight:800;letter-spacing:-1px;color:#a855f7;">R$ 435k</h3>
                    <span style="font-size:0.78rem;color:#a855f7;font-weight:700;">↑ 15.1% de margem</span>
                </div>
            </div>

            <div class="glass card-detailed">
                <div style="padding:20px 28px;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between;">
                    <h3 style="font-size:1rem;font-weight:800;">🏆 Ranking Consolidado de Filiais</h3>
                    <span style="font-size:0.75rem;color:var(--text-secondary);">Março 2026</span>
                </div>
                <div style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;font-size:0.88rem;">
                        <thead>
                            <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;">#</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;">FILIAL / UNIDADE</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;">FATURAMENTO (RB)</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;">EBITDA</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;">ROI</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;">LUCRATIVIDADE</th>
                                <th style="padding:14px 20px;text-align:left;font-size:0.7rem;font-weight:700;color:var(--text-secondary);text-transform:uppercase;letter-spacing:1.2px;width:200px;">PERFORMANCE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="transition:background 0.2s;border-bottom:1px solid rgba(255,255,255,0.04);" onmouseenter="this.style.background='rgba(249,115,22,0.05)'" onmouseleave="this.style.background='transparent'">
                                <td style="padding:14px 20px;"><span style="background:rgba(249,115,22,0.2);color:var(--accent);padding:4px 10px;border-radius:8px;font-weight:800;">🥇</span></td>
                                <td style="padding:14px 20px;font-weight:700;">Filial Centro (Matriz)</td>
                                <td style="padding:14px 20px;font-weight:600;">R$ 1.450.000</td>
                                <td style="padding:14px 20px;color:var(--text-secondary);">R$ 280.000</td>
                                <td style="padding:14px 20px;color:var(--accent);font-weight:800;" class="glow">32%</td>
                                <td style="padding:14px 20px;color:var(--positive);font-weight:800;">12.5%</td>
                                <td style="padding:14px 20px;">
                                    <div style="display:flex;align-items:center;gap:8px;">
                                        <div style="flex:1;height:6px;background:rgba(255,255,255,0.06);border-radius:3px;">
                                            <div style="width:85%;height:100%;background:linear-gradient(90deg,var(--accent),#ff9500);border-radius:3px;"></div>
                                        </div>
                                        <span style="font-size:0.72rem;color:var(--text-secondary);">85%</span>
                                    </div>
                                </td>
                            </tr>
                            <tr style="transition:background 0.2s;border-bottom:1px solid rgba(255,255,255,0.04);" onmouseenter="this.style.background='rgba(99,102,241,0.05)'" onmouseleave="this.style.background='transparent'">
                                <td style="padding:14px 20px;"><span style="background:rgba(99,102,241,0.2);color:#818cf8;padding:4px 10px;border-radius:8px;font-weight:800;">🥈</span></td>
                                <td style="padding:14px 20px;font-weight:700;">Filial Norte</td>
                                <td style="padding:14px 20px;font-weight:600;">R$ 820.000</td>
                                <td style="padding:14px 20px;color:var(--text-secondary);">R$ 110.000</td>
                                <td style="padding:14px 20px;color:var(--accent);font-weight:800;" class="glow">28%</td>
                                <td style="padding:14px 20px;color:var(--positive);font-weight:800;">8.4%</td>
                                <td style="padding:14px 20px;">
                                    <div style="display:flex;align-items:center;gap:8px;">
                                        <div style="flex:1;height:6px;background:rgba(255,255,255,0.06);border-radius:3px;">
                                            <div style="width:60%;height:100%;background:linear-gradient(90deg,#6366f1,#818cf8);border-radius:3px;"></div>
                                        </div>
                                        <span style="font-size:0.72rem;color:var(--text-secondary);">60%</span>
                                    </div>
                                </td>
                            </tr>
                            <tr style="transition:background 0.2s;" onmouseenter="this.style.background='rgba(255,255,255,0.02)'" onmouseleave="this.style.background='transparent'">
                                <td style="padding:14px 20px;color:#f59e0b;padding-left:14px;font-weight:700;">3</td>
                                <td style="padding:14px 20px;font-weight:700;">Filial Sul</td>
                                <td style="padding:14px 20px;font-weight:600;">R$ 610.000</td>
                                <td style="padding:14px 20px;color:var(--text-secondary);">R$ 45.000</td>
                                <td style="padding:14px 20px;color:#f59e0b;font-weight:800;">18%</td>
                                <td style="padding:14px 20px;color:var(--negative);font-weight:800;">3.1%</td>
                                <td style="padding:14px 20px;">
                                    <div style="display:flex;align-items:center;gap:8px;">
                                        <div style="flex:1;height:6px;background:rgba(255,255,255,0.06);border-radius:3px;">
                                            <div style="width:25%;height:100%;background:linear-gradient(90deg,var(--negative),#f87171);border-radius:3px;"></div>
                                        </div>
                                        <span style="font-size:0.72rem;color:var(--negative);">25%</span>
                                    </div>
                                </td>
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

function selectMes(mes, btn) {
    // Atualiza visual das pílulas
    document.querySelectorAll('.month-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    // Atualiza o valor hidden
    const hiddenInput = document.getElementById('filtroMes');
    if (hiddenInput) hiddenInput.value = mes;
    // Re-renderiza a página atual com o novo mês
    switchPage(window.currentPage || 'executiva');
}

function exportData(tipo) {
    const pageTitle = document.getElementById('currentPageTitle')?.innerText || 'MotoCarCF';
    const mes = document.getElementById('filtroMes')?.value || '3';
    const ano = document.getElementById('filtroData')?.value || '2026';
    const filial = document.getElementById('filtroFilial')?.value || 'todas';
    
    const mesesNome = ['','Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

    if (tipo === 'XLSX') {
        // 📊 Gerar e Baixar Excel REAL via SheetJS (XLSX Library)
        try {
            if (typeof XLSX === 'undefined') {
                // Carrega a lib se não estiver disponível
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
                script.onload = () => exportData('XLSX');
                document.head.appendChild(script);
                return;
            }

            // Dados do Dashboard MotoCarCF
            const dados = [
                ['MotoCarCF | Cockpit Elite', '', '', ''],
                [`Relatório: ${pageTitle}`, `Período: ${mesesNome[parseInt(mes)]}/${ano}`, `Filial: ${filial === 'todas' ? 'Grupo Consolidado' : filial}`, ''],
                ['', '', '', ''],
                ['INDICADOR', 'VALOR', 'VARIAÇÃO', 'STATUS'],
                ['Receita Bruta (RB)', 'R$ 2.450.000', '+14%', '✅ Acima da Meta'],
                ['Impostos e Deduções', 'R$ (310.000)', '-2.1%', '⚠️ Monitorar'],
                ['CMV - Custo Mercadoria', 'R$ (890.000)', '-4.8%', '⚠️ Monitorar'],
                ['Lucro Bruto Operacional', 'R$ 1.250.000', '+8%', '✅ OK'],
                ['Despesas Comerciais', 'R$ (120.000)', '+1.5%', '✅ OK'],
                ['Despesas Administrativas', 'R$ (230.000)', '+0.8%', '✅ OK'],
                ['Lucro Líquido', 'R$ 420.000', '+8%', '✅ Acima Meta'],
                ['ROI', '12.4%', '', '✅ Meta Batida'],
                ['', '', '', ''],
                ['FILIAIS', 'FATURAMENTO', 'EBITDA', 'ROI%'],
                ['Filial Centro (Matriz)', 'R$ 1.450.000', 'R$ 280.000', '32%'],
                ['Filial Norte', 'R$ 820.000', 'R$ 110.000', '28%'],
                ['Filial Sul', 'R$ 610.000', 'R$ 45.000', '18%'],
            ];

            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.aoa_to_sheet(dados);

            // Largura das colunas
            ws['!cols'] = [{wch: 35}, {wch: 20}, {wch: 15}, {wch: 20}];

            XLSX.utils.book_append_sheet(wb, ws, 'MotoCarCF Dashboard');
            XLSX.writeFile(wb, `MotoCarCF_${pageTitle.replace(/ /g,'_')}_${mesesNome[parseInt(mes)]}_${ano}.xlsx`);

        } catch (err) {
            alert('Erro ao gerar Excel: ' + err.message);
        }

    } else if (tipo === 'PDF') {
        // 🖨️ PDF via Print do navegador (Ctrl+P → Salvar como PDF)
        const printContent = document.getElementById('pageContainer')?.innerHTML || '';
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>MotoCarCF | ${pageTitle} - ${mesesNome[parseInt(mes)]}/${ano}</title>
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;800&display=swap" rel="stylesheet">
                <style>
                    body { font-family: 'Outfit', sans-serif; background: #fff; color: #111; padding: 32px; }
                    h1 { font-size: 1.8rem; margin-bottom: 4px; }
                    .info { color: #555; margin-bottom: 24px; font-size: 0.9rem; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th { background: #f97316; color: white; padding: 10px 14px; text-align: left; }
                    td { padding: 9px 14px; border-bottom: 1px solid #eee; font-size: 0.9rem; }
                    tr:nth-child(even) td { background: #f9fafb; }
                    .footer { margin-top: 40px; font-size: 0.75rem; color: #999; text-align: center; }
                    @media print { body { padding: 16px; } }
                </style>
            </head>
            <body>
                <h1>🏍️ MotoCarCF | ${pageTitle}</h1>
                <div class="info">Período: ${mesesNome[parseInt(mes)]}/${ano} &nbsp;|&nbsp; Filial: ${filial === 'todas' ? 'Grupo Consolidado' : filial}</div>
                <table>
                    <thead><tr><th>Indicador</th><th>Valor</th><th>Variação</th><th>Status</th></tr></thead>
                    <tbody>
                        <tr><td>Receita Bruta (RB)</td><td>R$ 2.450.000</td><td>+14%</td><td>✅ Acima da Meta</td></tr>
                        <tr><td>Impostos e Deduções</td><td>R$ (310.000)</td><td>-2.1%</td><td>⚠️ Monitorar</td></tr>
                        <tr><td>CMV - Custo Mercadoria</td><td>R$ (890.000)</td><td>-4.8%</td><td>⚠️ Monitorar</td></tr>
                        <tr><td>Lucro Bruto Operacional</td><td>R$ 1.250.000</td><td>+8%</td><td>✅ OK</td></tr>
                        <tr><td>Despesas Comerciais</td><td>R$ (120.000)</td><td>+1.5%</td><td>✅ OK</td></tr>
                        <tr><td>Despesas Administrativas</td><td>R$ (230.000)</td><td>+0.8%</td><td>✅ OK</td></tr>
                        <tr><td><strong>Lucro Líquido</strong></td><td><strong>R$ 420.000</strong></td><td>+8%</td><td>✅ Acima Meta</td></tr>
                    </tbody>
                </table>
                <div class="footer">Gerado por MotoCarCF Cockpit Elite – ${new Date().toLocaleString('pt-BR')}</div>
                <script>window.onload = () => { window.print(); }<\/script>
            </body>
            </html>
        `);
        printWindow.document.close();
    }
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
