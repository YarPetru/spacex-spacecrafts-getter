const theme = {
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1280px',
  },
  colors: {
    white: '#ffffff',
    mainBackground: '#f6f7fb',
    inputBackground: '#f5f7fa',
    primaryFont: '#242a37',
    secondaryFont: '#898f9f',
    placeholderFont: '#a6abb9',
    accent: '#ff6b08',
    headerBackground: '#b1b5c2',
    transparentBackground: '#f5f7fa22',
  },
  shadows: {
    input: 'inset 0px 1px 2px rgba(29, 29, 27, 0.15)',
    item: '0px 2px 3px  rgba(9, 30, 63, 0.1)',
    button: '0px 2px 2px rgba(9, 30, 63, 0.15)',
    card: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    modal: '10px 10px 20px rgba(9, 30, 63, 0.2)',
  },
  transition: {
    transitionFunction: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  borders: {
    mainBorderRadius: '20px',
    roundBorderRadius: '50%',
    secondaryBorderRadius: '10px',
    buttonsBorderRadius: '6px',
  },
};

export default theme;

//   // palette
//   --main-dark: #272d2d;
//   --secondary-dark: #a39ba8;
//   --main-light: #edf5fc;
//   --hover-color: #b8c5d6;
//   --accent-color: #23ce6b;
//   --accent-red: #f5c6d7;
