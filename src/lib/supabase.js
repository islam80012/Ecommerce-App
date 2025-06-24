import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jxdpvfmmsjhnhakzwuae.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4ZHB2Zm1tc2pobmhha3p3dWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NzEzNTcsImV4cCI6MjA2NjM0NzM1N30.tqpYwsNq81OUy_MP9Yfj6_CLmOuAvOd8wBcoNqlT18c';

export const supabase = createClient(supabaseUrl, supabaseKey);

/*
import { supabase } from './lib/supabase';

// Sign up with email/password
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123',
});

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123',
});

// Sign out
await supabase.auth.signOut(); 
*/