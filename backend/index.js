const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const app = express();
const PORT = 3001;

// Supabase bağlantısı
const supabaseUrl = 'https://xxxx.supabase.co'; // https://gdgjuufpqxkxenebirat.supabase.co
const supabaseKey = 'public-anon-key';          // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZ2p1dWZwcXhreGVuZWJpcmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMjIxMDksImV4cCI6MjA2NTg5ODEwOX0.n6-GHvnmYhjXnEKaJ-3JB-wafTeP9p43L-xuP97z62o
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
  res.send('Backend çalışıyor!');
});

// Supabase'den kullanıcıları çekme
app.get('/users', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});