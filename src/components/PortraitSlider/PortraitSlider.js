import { HeaderWithSubtitle } from "../GlobalComponents/HeaderWithSubtitle";

export const PortraitSlider = ({ data, sliderImages }) => {
  // console.log("Abkeis", data);
  return (
    <section className="section portraitslider">
      <div className="container has-text-centered main-section">
        <div className="header-text">
          <HeaderWithSubtitle
            title={data.headline_h2}
            subtitle={data.overline}
          />
        </div>
        <div className="columns is-mobile  is-multiline is-centered">
          {data.slides.map((element, index) => {
            return (
              <div key={"portraitslide" + index} className="column is-4-desktop">
                <a href="/" className="expeditions">
                  <img src={sliderImages[index]} layout="fill" />
                  <div className="portrait-text">
                    <span>{element.headline}</span>
                    <span>{element.subline}</span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        <button className="button-secondary is-outlined is-rounded has-text-right">
          {data.links[0].link.title}
        </button>
      </div>
    </section>
  );
};
