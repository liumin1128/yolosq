export default [
  {
    path: '/',

    wrappers: ['@/wrappers/material-ui'],

    routes: [
      {
        path: '/home',
        component: '@/pages/home',
        title: 'Home',
        exact: true,
      },

      {
        path: '/403',
        component: '@/pages/403',
      },

      {
        path: '/',
        redirect: '/home',
      },
    ],
  },
];
