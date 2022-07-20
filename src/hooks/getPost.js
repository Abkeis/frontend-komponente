import { getUrl } from "../utils/url";

export const getPost = async (slug) => {
  const postRes = await fetch(
    getUrl() + "/posts?slug=" + slug + "&acf_format=light"
  );
  return await postRes.json();
};

export const getPostForType = async (slug, type) => {
  const postRes = await fetch(
    getUrl() + "/"+type+"?slug=" + slug + "&acf_format=light"
  );
  return await postRes.json();
};


