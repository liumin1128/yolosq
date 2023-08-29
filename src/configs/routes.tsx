export default [
  {
    path: '/',

    wrappers: ['@/wrappers/material-ui'],

    routes: [
      {
        path: '/home',
        component: '@/layouts/index',

        routes: [
          {
            path: '/home',
            component: '@/pages/home',
            title: 'Home',
            exact: true,
          },
          {
            path: '/home/bookingflight',
            component: '@/pages/bookingflight',
            title: 'Home',
            exact: true,
          },
          {
            path: '/home/trip',
            component: '@/pages/trip',
            title: 'Home',
            exact: true,
          },
          {
            path: '/home/flightstatus',
            component: '@/pages/flightstatus',
            title: 'Home',
            exact: true,
          },
          {
            path: '/home/more',
            component: '@/pages/more',
            title: 'Home',
            exact: true,
          },
        ],
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
