import { getUrl } from "../utils/url";

export const getAllPosts = async () => {
  const postsRes = await fetch(getUrl() + "/posts?per_page=100");
  return await postsRes.json();
};

export const getAllPostsOfType = async (type) => {
  const postsRes = await fetch(getUrl() + `/${type}?per_page=100`);
  return await postsRes.json();
};