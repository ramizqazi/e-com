export default {
  baseStyle: {
    background: 'white',
    boxShadow: 'sm',
  },
  variants: {
    rounded: {
      padding: 5,
      borderRadius: 'xl',
    },
    smooth: {
      padding: 8,
      borderRadius: 'lg',
    },
  },
  defaultProps: {
    variant: 'smooth',
  },
};
