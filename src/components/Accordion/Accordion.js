import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Accordion = ({ data }) => {
  // console.log("Abkeis", data);
  //const [onClick, setOnClick] = useState(false);
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="accordion">
      <div className="container">
        <div className="head has-text-centered">
          <span className="subtitle">{data.overline}</span>
          <span className="matro">{data.headline_h2}</span>
        </div>
        {data.accordion.map((element, i) => {
          const isOpen = i === expanded;
          return (
            <div key={`accordion-item-${i}`} className="accordion-item">
              <motion.div
                className=" motion-header collapse accordion-infos"
                initial={false}
                key={i}
                onClick={() => setExpanded(isOpen ? false : i)}
              >
                <span className=" header-text">{element.header}</span>
                <span className={isOpen ? "arrow-icon active" : "arrow-icon"} />
              </motion.div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <div className="collapse-content">
                      <p
                        className="content"
                        dangerouslySetInnerHTML={{ __html: element.content }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
