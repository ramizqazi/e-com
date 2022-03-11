export default {
  baseStyle: {
    background: 'white',
    boxShadow: '0 5px 5px 0 rgba(0,0,0,0.2)',
    border: '1px',
    borderColor: 'gray.300',
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
