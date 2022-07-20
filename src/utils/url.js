export const BASE_URL_API =
  process.env.WP_API_URL.slice(-1) === "/"
    ? `${process.env.WP_API_URL.slice(0, -1)}`
    : process.env.WP_API_URL;

export const getUrl = (lang, defaultLang, v1) => {
  if (v1) {
    return lang !== defaultLang
      ? `${BASE_URL_API}/${lang}/wp-json`
      : BASE_URL_V1;
  } else {
    return lang !== defaultLang
      ? `${BASE_URL_API}/${lang}/wp-json/wp/v2`
      : BASE_URL;
  }
};

export const BASE_URL_V1 = `${BASE_URL_API}/wp-json`;
export const BASE_URL_V3 = `${BASE_URL_API}/wp-json/acf/v3`;
export const BASE_URL = `${BASE_URL_API}/wp-json/wp/v2`;

export const getPathName = (url) => {
  return new URL(url).pathname;
};

export const getPathNameArray = (url) => {
  const path = getPathName(url);
  return path.split("/").filter((el) => el !== "");
};
