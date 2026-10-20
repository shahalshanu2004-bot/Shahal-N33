const git = require('isomorphic-git');
const fs = require('fs');
const http = require('isomorphic-git/http/node');
const { execSync } = require('child_process');

async function main() {
  const token = execSync('& "C:\\Program Files\\GitHub CLI\\gh.exe" auth token', {
    shell: 'powershell.exe',
    encoding: 'utf8'
  }).trim();

  console.log('Obtained token successfully');

  // Stage all modified files
  const statusMatrix = await git.statusMatrix({ fs, dir: '.' });
  let stagedCount = 0;
  for (const [filepath, head, workdir, stage] of statusMatrix) {
    if (workdir === 2) {
      await git.add({ fs, dir: '.', filepath });
      stagedCount++;
    } else if (workdir === 0) {
      await git.remove({ fs, dir: '.', filepath });
      stagedCount++;
    }
  }
  console.log(`Staged ${stagedCount} files`);

  // Commit
  const sha = await git.commit({
    fs,
    dir: '.',
    author: {
      name: 'Shahal N',
      email: 'shahalshanu2004@gmail.com'
    },
    message: 'feat(case-studies): update CaseStudiesSection with all 4 entries, verified metrics and action links'
  });
  console.log('Committed SHA:', sha);

  // Push to remote main
  const pushResult = await git.push({
    fs,
    http,
    dir: '.',
    remote: 'origin',
    ref: 'main',
    onAuth: () => ({ username: token })
  });

  console.log('Push completed:', JSON.stringify(pushResult, null, 2));
}

main().catch(err => {
  console.error('Push error:', err);
  process.exit(1);
});
