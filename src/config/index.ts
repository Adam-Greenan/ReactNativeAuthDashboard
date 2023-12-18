export default {
  colors: {
    primary: "#019FAC",
    secondary: "#E6EBF5",
    black: "#000000",
    white: "#FFFFFF",
    lightGray: "#F5F7FB",
    gray: "#878A92",
    yellow: "#F4E23A",
    green: "#1FE000",
    containers: {
      background: {
        normal: "#FEFEFE",
      },
      avatar: "#E3E1FC",
      notification: "#F4D7E2",
    },
    border: {
      light: "#E7EBF5",
      selected: "#019FAC",
      gray: "#6E6D6D",
    },
    text: {
      primary: "#49507D",
      secondary: "#B1ACF6",
      notification: "#F05C80",
    },
    disabled: {
      tintedWhite: "#F7F9FC",
      lightGray: "#E4E9F2",
      text: "#CECECE",
    },
  },
  effects: {
    disabledOpacity: 0.6,
    activeOpacity: 0.8,
    inactiveTintColor: "rgba(255, 255, 255, 0.5)",
    dropshadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 8,
    },
    glow: {
      shadowColor: "#00000099",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  },
  accessibility: {
    maxFontSizeMultiplier: 1,
  },
  logo: require("src/assets/images/Logos/ColabChatLogo.png"),
};
