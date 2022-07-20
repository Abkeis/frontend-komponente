import { PressSlider } from "../components/PressSlider/PressSlider";
import { Infobox } from "../components/Infobox/Infobox";
import { Warnings } from "../components/Warnings/Warnings";
import { Accordion } from "../components/Accordion/Accordion";
import { Prices } from "../components/Prices/Prices";
import { PortraitSlider } from "../components/PortraitSlider/PortraitSlider";
import { Map } from "../components/Map/Map";

export const Modules = (props) => {
  switch (props.module.acf_fc_layout) {
    case "infobox":
      return <Infobox data={props.module} />;
    case "portrait_slider":
      return <PortraitSlider data={props.module} sliderImages={props.sliderImages}/>;
    case "warnings":
      return <Warnings data={props.module} />;
    case "pressslider":
      return <PressSlider data={props.module} />;
    case "accordion":
      return <Accordion data={props.module} />;
    case "prices_and_details":
      return <Prices data={props.module} />;
      case "map":
      return <Map data={props.module} />;
    default:
      return null;
  }
};





