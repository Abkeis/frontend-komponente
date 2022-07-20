/**
 * Maps the post type to the respective sub-path
 * @type {[{path: string, postType: string},{path: string, postType: string},{path: string, postType: string},{path: string, postType: string}]}
 */
export const customPostTypesPathMapping = [
  {postType: "infos", path: "travel-faq"},
  {postType: "stories", path: "stories"},
  {postType: "projects", path: "about-us"},
  {postType: "expeditions", path: "experiences"},
]

export function getPostTypeForPath(path) {
  const item = customPostTypesPathMapping.find((mapping)=> {
    return mapping.path === path
  })
  // console.log("mapped " + path + " to post type " + item.postType);
  return item?.postType
}