import { HeaderWithSubtitle } from "../GlobalComponents/HeaderWithSubtitle";
import { IconWithTitle } from "../GlobalComponents/IconWithTitle";

export const Warnings = ({ data }) => {
  return (
    <section className="section warnings">
      <div className="container has-text-centered main-section">
        <div className="header-text">
          <HeaderWithSubtitle
            title={data.overline}
            subtitle={data.headline_h2}
          />
        </div>

        <div className="columns is-mobile  is-multiline is-centered text-box-sm">
          {data.warnings.map((element, i) => {
            return (
              <IconWithTitle
                url={element.icon.url}
                title={element.label}
                key={i}
              />
            );
          })}
        </div>
        <p
          className="text"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />

        <button className="button-secondary is-outlined is-rounded has-text-right warnings-btn">
          {data.links[0].link.title}
        </button>
      </div>
    </section>
  );
};
