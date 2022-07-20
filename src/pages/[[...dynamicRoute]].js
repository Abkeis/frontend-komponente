import { Modules } from "../utils/module-list";
import { getPage } from "../hooks/getPages";
import { getOptions } from "../hooks/getOptions";
import { getAllPages } from "../hooks/getAllPages";
import { getPathNameArray } from "../utils/url";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import {
  customPostTypesPathMapping,
  getPostTypeForPath,
} from "../utils/constants";
import { getAllPostsOfType } from "../hooks/getAllPosts";
import { getPostForType } from "../hooks/getPost";
import { getMedia } from "../hooks/getMedia";

export default function Home({ pageData, sliderImages }) {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined" && (!pageData || pageData.length === 0)) {
      router.push("/404");
    }
  }, [pageData, router]);

  return (
    <>
      {pageData.length && (
        <main id={`${pageData[0].slug}`}>
          {pageData[0].acf?.modules_aunds &&
            pageData[0].acf.modules_aunds.map((module, index) => (
              <Modules key={index} module={module} />
            ))}

          {/* media  */}
          {pageData[0].acf?.modules &&
            pageData[0].acf.modules.map((module, index) => (
              <Modules
                key={index}
                module={module}
                sliderImages={sliderImages}
              />
            ))}
          {/* media  */}
        </main>
      )}
    </>
  );
}

export async function getStaticPaths({}) {
  const pages = await getAllPages();
  const paths = [];
  if (pages) {
    // fetch pages with content
    pages.map((page) => {
      if (page.acf.module !== false) {
        const pathArray = getPathNameArray(page.link);
        if (page.slug === "home") {
          paths.push({
            params: {
              dynamicRoute: ["/"],
            },
          });
        } else {
          paths.push({
            params: {
              dynamicRoute: pathArray,
            },
          });
        }
      }
    });
  }

  // fetch all custom post types
  for (const item of customPostTypesPathMapping) {
    const allPosts = await getAllPostsOfType(item.postType);
    allPosts?.map((post) => {
      paths.push({
        params: {
          dynamicRoute: [item.path, post.slug],
        },
      });
    });
  }

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { dynamicRoute } = context.params;

  let pageData = null;
  if (!dynamicRoute) {
    pageData = await getPage("home");
  } else if (dynamicRoute.length === 1) {
    const slug = dynamicRoute.pop();
    pageData = await getPage(slug);
  } else if (dynamicRoute.length === 2) {
    const slug = dynamicRoute.pop();
    const postType = getPostTypeForPath(dynamicRoute[0]);
    if (postType) {
      pageData = await getPostForType(slug, postType);
    } else {
      pageData = await getPage(slug);
    }
  }
  const options = await getOptions();
  {
    /* media  */
  }
  let sliderImages = [];
  const slider =
    pageData && pageData[0]
      ? pageData[0].acf?.modules.find((module) => {
          return module.acf_fc_layout === "portrait_slider";
        })
      : null;
  if (slider) {
    const sliderpromes = slider.slides.map((slide) => {
      return getMedia(slide.image);
    });
    sliderImages = await Promise.all(sliderpromes);
    console.log(sliderImages);
  }
  {
    /* media  */
  }

  return {
    props: {
      pageData,
      options,
      sliderImages,
    },
    revalidate: 120, // In seconds
  };
}
