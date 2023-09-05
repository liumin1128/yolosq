import routes from './src/configs/routes';

export default {
  routes,
  hash: true,
  publicPath: '/',
  npmClient: 'pnpm',
  history: { type: 'hash' },
  favicons: ['/favicon/sq.svg', '/favicon/sq.ico'],
  esbuildMinifyIIFE: true,

  metas: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
    },
  ],
  links: [
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};
