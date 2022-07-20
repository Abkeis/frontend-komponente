import { applyBackgroundColor } from "../../utils/backgroundColor";
import Image from "next/image";
import { Section } from "../GlobalComponents/Section";
import { Kontaktbox } from "./Kontaktbox";

export const Infobox = ({ data }) => {
  const bgColor = applyBackgroundColor(data.background);
  const boxKontakt = data.kontakt;

  let columnsClass;

  if (data.layout === "left") {
    columnsClass = "";
  } else if (data.layout === "top") {
    columnsClass = "layout-top is-desktop-reverse-row";
  } else {
    columnsClass = "is-desktop-reverse-row";
  }

  let boxContent;
  const textContent = (
    <div className={`column is-12-touch is-6-desktop`}>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  );

  const boxColor = bgColor === "bgLight" ? "bgLightGrey" : "bgLight";
  const boxLayout = data.layout === "top" ? "has-margin" : "";
  const boxStyle = `column ${boxColor} ${boxLayout} box-content is-11-mobile is-8-tablet is-5-desktop is-4-widescreen`;

  const buttonBorderColor = bgColor === "bgLight" ? "lightgrey" : "white";

  if (data.boxtype === "text") {
    boxContent = (
      <div className={`is-text ${boxStyle}`}>
        <Image
          src={data.info.image.url}
          alt={data.info.image.alt}
          height={data.info.image.height}
          width={data.info.image.width}
        />
        <div dangerouslySetInnerHTML={{ __html: data.info.content }} />
      </div>
    );
  } else {
    boxContent = (
      <div className={`is-contact ${boxStyle}`}>
        <Kontaktbox data={boxKontakt} background={buttonBorderColor} />
      </div>
    );
  }

  return (
    <Section sectionClassName={`${bgColor} infobox`} containerClassName="">
      <div
        className={`columns is-multiline is-centered-row has-text-centered ${columnsClass}`}
      >
        {boxContent}
        {textContent}
      </div>
    </Section>
  );
};
