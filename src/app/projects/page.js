import styles from './page.module.css';
import ProjectCard from '../components/ProjectCard';
import BackButton from '../components/BackButton';

async function getRepositories() {
  const username = 'zyreoo'; // Your GitHub username
  const response = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    },
    next: { revalidate: 3600 } // Revalidate cache every hour
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }

  const repos = await response.json();
  return repos
    .filter(repo => !repo.fork) // Filter out forked repositories
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)); // Sort by most recently updated
}

export default async function Projects() {
  const repositories = await getRepositories();

  return (
    <div className={styles.container}>
      <BackButton />
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.grid}>
        {repositories.map((repo) => (
          <ProjectCard
            key={repo.id}
            name={repo.name}
            description={repo.description || 'No description available'}
            htmlUrl={repo.html_url}
            topics={repo.topics}
          />
        ))}
      </div>
    </div>
  );
} 