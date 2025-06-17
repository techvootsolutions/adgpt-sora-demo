export const getAspectRatioClass = (ratio) => {
  switch (ratio) {
    case "16:9":
      return "aspect-video";
    case "1:1":
      return "aspect-square";
    case "9:16":
      return "aspect-[9/16]";
    default:
      return "aspect-square";
  }
};
