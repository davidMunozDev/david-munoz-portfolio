export const applyStyles = (styles = []) => {
  return styles.filter((style) => Boolean(style)).join(" ");
};
