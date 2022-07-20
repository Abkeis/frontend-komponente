import Image from "next/image";
import { HeaderWithSubtitle } from "../GlobalComponents/HeaderWithSubtitle";
export const Map = ({ data }) => {
  return (
    <section className="section map">
      <div className="container has-text-centered main-section">
        <div className="columns is-multiline has-text-centered">
          <div className="column is-7">
            <Image
              className="img"
              src={data.image.url}
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
              priority
            />
          </div>
          <div className="column"></div>
          <div className="column is-4">
            <div className="legend">
              <HeaderWithSubtitle title={data.headline_h2} />
              <div className="legend-wrapper">
                {data.tours.map((element, i) => {
                  return (
                    <div key={i} className="legend-item">
                      <a href="/" className="map-tours">
                        {/* <Pfeil className="map-arrow" /> */}
                        <h3 className="overline">{element.headline}</h3>
                        <p className="tour_color">{element.text}</p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
