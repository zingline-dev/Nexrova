import { execSync } from 'child_process';

const sql = `
DROP POLICY IF EXISTS "Allow public resume access" ON storage.objects;
CREATE POLICY "Allow public resume access" ON storage.objects FOR ALL TO public USING (bucket = 'resumes') WITH CHECK (bucket = 'resumes');
`;

const queries = sql.trim().split(';').filter(q => q.trim());

for (const query of queries) {
  const cmd = `npx @insforge/cli db query "${query.trim().replace(/"/g, '""')}"`;
  console.log('Running:', cmd);
  try {
    const stdout = execSync(cmd).toString();
    console.log('Success:', stdout);
  } catch (err) {
    console.error('Error:', err.stdout?.toString() || err.message);
  }
}
