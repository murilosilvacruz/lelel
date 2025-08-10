import type { NextConfig } from 'next';

// Inferir basePath automaticamente no GitHub Actions, caso não seja fornecido
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? '';
const inferredBasePath = process.env.GITHUB_ACTIONS && repoName ? `/${repoName}` : '';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || inferredBasePath || '';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
