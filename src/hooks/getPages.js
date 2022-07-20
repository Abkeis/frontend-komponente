import {getUrl} from "../utils/url";

export const getPage = async (slug) => {
  const pageRes = await fetch (getUrl() + '/pages?slug=' + slug);
  return await pageRes.json();
}
    
