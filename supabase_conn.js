const SUPABASE_URL = 'https://imfxoedqxsojanoksrfw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_vtDAMIZX-apl7InWq8_Z-Q_i6ZSGco2';

// Ensure Supabase JS library is loaded
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

// Verifica a conexão e avisa no console
async function testSupabaseConnection() {
    if (!supabase) {
        console.error("Supabase Client not loaded! Verifique se importou o script @supabase/supabase-js.");
        return;
    }
    try {
        const { data, error } = await supabase.from('vendas_motos').select('*').limit(1);
        if (error) throw error;
        console.log("🟢 SUPABASE CONECTADO COM SUCESSO! MotoCarCF Bridge Ativada. Dados:", data);
    } catch (err) {
        console.error("🔴 ERRO DE CONEXÃO SUPABASE:", err.message);
    }
}

// Inicializa o teste (vai aparecer no Developer Tools > Console do navegador)
testSupabaseConnection();
