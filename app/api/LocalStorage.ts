export const getJWT = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("jwt");
  }
  return null;
};

export const setJWT = (jwt: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", jwt);
  }
};

export const removeJWT = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
  }
};

export const nextPage = () => {
  if (typeof window !== "undefined") {
    const page = localStorage.getItem("page");
    const currentPage = page != null ? parseInt(page) : 1;
    localStorage.setItem("page", (currentPage + 1).toString());
  }
};

export const getPage = () => {
  const page = localStorage.getItem("page");
  return page != null ? parseInt(page) : 1;
};

export const initPage = () => {
  localStorage.setItem("page", "1");
};

export const prevPage = () => {
  if (typeof window !== "undefined") {
    const page = localStorage.getItem("page");
    const currentPage = page != null ? parseInt(page) : 1;
    if (currentPage > 1)
      localStorage.setItem("page", (currentPage - 1).toString());
  }
};

export const getMultiplier = () => {
  const multiplier = localStorage.getItem("multiplier");
  return multiplier;
};

export const setMultiplier = (multiplier: string) => {
  localStorage.setItem("multiplier", multiplier.toString());
};
