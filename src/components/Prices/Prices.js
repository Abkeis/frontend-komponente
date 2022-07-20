import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import { Included } from "./Included";
import { PricesList } from "./PricesList";

export const Prices = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const variants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
  };
  return (
    <div className="section prices">
      <div className="container has-text-centered">
        <span className="overline">{data.overline}</span>
        <h2 className="matro">{data.headline_h2}</h2>
        {data.experience.map((element, i) => {
          const isOpen = i === expanded;
          return (
            <div key={i} className="prices-item container has-text-centered">
              <motion.div
                className=" motion-header collapse accordion-infos"
                initial={false}
                key={i}
                onClick={() => setExpanded(isOpen ? false : i)}
              >
                <div className="columns is-mutiline is-mobile">
                  <div className="column is-9-desktop is-7-mobile has-text-left header-text">
                    <h3 className="headline"> {element.headline} </h3>
                    <span>{element.first_subline}</span>
                    <span>{element.second_subline}</span>
                  </div>
                  <div className="column is-3-desktop is-5-mobile has-text-right header-text">
                    <span className="title-prices"> {data.label_button} </span>
                    <span
                      className={isOpen ? "arrow-icon active" : "arrow-icon"}
                    />
                  </div>
                </div>
              </motion.div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={variants}
                    transition={{
                      duration: 0.5,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <div className="border-top">
                      <div className="columns is-mutiline ">
                        <div className="column is-9-desktop is-7-tablet has-text-left header-text">
                          <p
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html: element.content,
                            }}
                          />
                          {element.included_list && (
                            <Included
                              included_list={element.included_list}
                              list_head={element.list_head}
                            />
                          )}
                        </div>
                        <div className="column is-3-desktop is-5-tablet has-text-right header-text border-left">
                          {element.prices && (
                            <PricesList prices={element.prices} />
                          )}
                          <button className="button is-outlined is-rounded has-text-right check-btn ">
                            {" "}
                            {data.request_button}{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        {/* //button */}
      </div>
    </div>
  );
};
