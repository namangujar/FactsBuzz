import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gizjpmvymcnhluusmayb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpempwbXZ5bWNuaGx1dXNtYXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4NjEyMDUsImV4cCI6MjAyMDQzNzIwNX0.v6jXlrXsUWLCSbvC9sjzQiSWpsCjBc4pct0GjR8PyMg";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;