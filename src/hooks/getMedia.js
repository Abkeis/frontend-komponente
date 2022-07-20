import {getUrl} from "../utils/url";

export const getMedia = async (id) => {
  const mediaRes = await fetch (getUrl() + '/media/' + id);
  const mediaItem = await mediaRes.json();
  return mediaItem?.guid.rendered;
}
