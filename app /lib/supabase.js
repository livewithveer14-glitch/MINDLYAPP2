import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uzbqazweaggpitjgdrbg.supabase.co'
const supabaseKey = 'sb_publishable_WT79EyrZ09pUdgtsJPZ86g_lHf_Wug5'

export const supabase = createClient(supabaseUrl, supabaseKey)
