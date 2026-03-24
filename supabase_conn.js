const SUPABASE_URL = 'https://imfxoedqxsojanoksrfw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_vtDAMIZX-apl7InWq8_Z-Q_i6ZSGco2';

// Garante que o cliente seja criado uma única vez e exposto globalmente
if (!window._supabaseClient) {
    window._supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
const supabaseClient = window._supabaseClient;

// Teste de conexão (visível no Developer Tools > Console)
async function testSupabaseConnection() {
    if (!supabaseClient) {
        console.error("❌ Supabase Client não inicializado.");
        return;
    }
    try {
        const { data, error } = await supabaseClient.from('vendas_motos').select('*').limit(1);
        if (error) throw error;
        console.log("🟢 SUPABASE CONECTADO! MotoCarCF Bridge Ativa.", data);
    } catch (err) {
        console.warn("⚠️ SUPABASE CONN:", err.message);
    }
}

testSupabaseConnection();
