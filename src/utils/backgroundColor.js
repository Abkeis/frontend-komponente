export const applyBackgroundColor = (bg) => {
    switch (bg) {
      case "white":
        return "bgLight";
      // we defined two cases for gray/grey
      case "lightgrey":
        return "bgLightGrey";
      case "lightgray":
          return "bgLightGrey";
      case "darkgray":
          return "bgDarkGrey";
      case "darkgrey":
        return "bgDarkGrey";
      case "gradient":
        return "bgGradient";
      default:
        return "bgLight";
    }
  };
  