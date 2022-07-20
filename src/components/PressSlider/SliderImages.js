import Link from "next/link";
import Image from "next/image";

export const SliderImages = (data, link) => {
  // console.log("Abkeis", link);

  let linkJSX;

  if (link === true) {
    linkJSX = (
      <Link
        passHref={true}
        alt={data.link.title}
        src={data.link.url}
        target={data.link.target}
      />
    );
  } else {
    linkJSX = (
      <Image
        alt={data.image.title}
        src={data.image.url}
        width={240}
        height={120}
      />
    );
  }

  return <div>{linkJSX}</div>;
};
