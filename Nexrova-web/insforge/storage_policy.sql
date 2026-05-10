CREATE POLICY "Allow public resume upload" ON storage.objects FOR INSERT TO anon WITH CHECK (bucket_id = 'resumes');
