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
        path: '/booking',
        component: '@/layouts/appbar',

        routes: [
          {
            path: '/booking/offer/list',
            component: '@/pages/booking/offer/list',
            title: 'Adelaide',
            exact: true,
          },
          {
            path: '/booking/offer/detail',
            component: '@/pages/booking/offer/detail',
            title: 'Adelaide',
            exact: true,
          },
          {
            path: '/booking/flight',
            component: '@/pages/booking/flight',
            title: 'Departing Flight',
            exact: true,
          },
          {
            path: '/booking/calender',
            component: '@/pages/booking/calender',
            title: 'Adelaide',
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
