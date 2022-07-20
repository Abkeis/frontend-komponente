import { getUrl } from "../utils/url";

export const getAllPages = async () => {
  const pagesRes = await fetch(getUrl() + "/pages?per_page=100");
  return await pagesRes.json();
};