// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fmldtsfxyrhnavsnrowr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtbGR0c2Z4eXJobmF2c25yb3dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyMjY0OTksImV4cCI6MjAzNTgwMjQ5OX0.Wo8seC9TjXgbpsxi_VnLo5lQG-td6QTJMr8n1RUNMDY';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
