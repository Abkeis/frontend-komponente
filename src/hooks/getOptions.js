import {BASE_URL_V3} from "../utils/url";

export async function getOptions() {
    const optionsRes = await fetch(BASE_URL_V3 + '/pages');
    return await optionsRes.json();
  } 