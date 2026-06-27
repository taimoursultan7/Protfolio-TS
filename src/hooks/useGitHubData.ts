import { useState, useEffect } from 'react';

export interface GitHubProfile {
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export const useGitHubData = (username: string) => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch Profile
        const profileRes = await fetch(`https://api.github.com/users/${username}`);
        if (!profileRes.ok) throw new Error('Failed to fetch GitHub profile');
        const profileData = await profileRes.json();
        setProfile({
          avatar_url: profileData.avatar_url,
          name: profileData.name || profileData.login,
          bio: profileData.bio || '',
          public_repos: profileData.public_repos,
          followers: profileData.followers,
          following: profileData.following,
        });

        // Fetch Repos
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        if (!reposRes.ok) throw new Error('Failed to fetch GitHub repositories');
        const reposData = await reposRes.json();
        
        // Filter and map repos
        const mappedRepos = reposData.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || 'No description available',
          html_url: repo.html_url,
          homepage: repo.homepage || '',
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          language: repo.language || 'TypeScript',
        }));
        
        setRepos(mappedRepos);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
        // Graceful fallback profile
        setProfile({
          avatar_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=80',
          name: 'Taimour Khan',
          bio: 'Software Engineer & AI Developer. Specializing in React.js, Deep Learning, and SaaS architectures.',
          public_repos: 42,
          followers: 120,
          following: 80,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { profile, repos, loading, error };
};
