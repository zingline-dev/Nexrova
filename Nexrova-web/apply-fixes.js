const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const sqlFile = path.join(__dirname, 'insforge', 'fix_rls.sql');
const sqlContent = fs.readFileSync(sqlFile, 'utf8');

// Split by semicolon, but handle cases where it might be inside quotes if needed
// For these specific policies, simple split works.
const queries = sqlContent.split(';').map(q => q.trim()).filter(q => q.length > 0);

console.log(`Found ${queries.length} queries to run.`);

for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    console.log(`Running query ${i + 1}/${queries.length}...`);
    try {
        // Escape quotes for the CLI command
        const escapedQuery = query.replace(/"/g, '""');
        const cmd = `npx @insforge/cli db query "${escapedQuery}"`;
        execSync(cmd, { stdio: 'inherit' });
        console.log('Success.');
    } catch (err) {
        console.error(`Error running query ${i + 1}:`, err.message);
    }
}
