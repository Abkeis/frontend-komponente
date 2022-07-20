import { Button } from "../GlobalComponents/Button";
import Image from "next/image";

export const Kontaktbox = ({ data, background }) => {
  data.link.background = "white";

  const buttonProps = {
    background: background,
    title: data.link.title,
    url: data.link.url,
    target: data.link.target,
  };

  return (
    <div className="contact-box has-text-centered">
      <figure className="image is-centered-row rounded">
        <Image
          src={data.info.image.url}
          alt={data.info.image.alt}
          height={data.info.image.height}
          width={data.info.image.width}
        />
      </figure>
      <h5 className="contact-box-title">{data.name}</h5>
      <h3>{data.zitat}</h3>
      <Button buttonProps={buttonProps} />
    </div>
  );
};
