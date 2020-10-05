const size = {
  mobile: "0px",
  tablet: "770px",
  desktop: "1024px",
};

const theme = {
  deepBlue: "#093687",
  priceDown: "#0051C7",
  priceDownTrans: "rgba(0,81,199,0.3)",
  priceUp: "#D60000",
  priceUpTrans: "rgba(214,0,0,0.3)",
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
