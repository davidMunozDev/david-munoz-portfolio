export const get = (key) => {
  const savedData = localStorage.getItem(key);
  return savedData && JSON.parse(savedData)?.content;
};

export const save = (key, payload) => {
  localStorage.setItem(key, JSON.stringify({ content: payload }));
};
