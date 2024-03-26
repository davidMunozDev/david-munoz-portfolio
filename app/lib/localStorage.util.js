export const get = (key) => {
  if (typeof window !== "undefined") {
    const savedData = window.localStorage.getItem(key);
    return savedData && JSON.parse(savedData)?.content;
  }
};

export const save = (key, payload) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, JSON.stringify({ content: payload }));
  }
};
