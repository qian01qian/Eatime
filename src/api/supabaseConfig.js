import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zbhtmfjbquanemafvikp.supabase.co'
// const supabaseKey = import.meta.env.VITE_FIREBASE_API_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiaHRtZmpicXVhbmVtYWZ2aWtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxNjQ0NzQsImV4cCI6MjA2NDc0MDQ3NH0.hQxC_xEdqQVzTKH_SCqEMqW5YzyEqMTEOwcSn__gkGY'
export const supabase = createClient(supabaseUrl, supabaseKey)