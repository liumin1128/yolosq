import { forwardRef } from 'react';
import { createTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'umi';
// import common from './theme.common';

// eslint-disable-next-line no-unused-vars
const LinkBehavior = forwardRef((props, ref) => {
  // eslint-disable-next-line
  // @ts-ignore
  // eslint-disable-next-line react/prop-types
  const { href, ...other } = props;
  return <RouterLink to={href} {...other} />;
});

const theme = createTheme({
  spacing: 10,

  shape: {
    borderRadius: 3,
  },

  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },

    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },

    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
      styleOverrides: {
        root: {
          textDecorationLine: 'none',
          '&:hover': {
            textDecorationLine: 'underline',
          },
        },
      },
    },

    MuiPaper: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: '1px solid #1e4976',
            '&[href]': {
              textDecorationLine: 'none',
            },
          },
        },
      ],
    },

    MuiTypography: {
      defaultProps: {
        color: 'inherit',
      },
    },

    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          height: 38,
          fontSize: '12px',
        },
        containedInherit: {
          color: '#212B36',
          '&:hover': {
            backgroundColor: '#C4CDD5',
          },
        },
      },
    },
  },
});

export default theme;
