export const Section = (props) => {
  return (
    <section className={`section ${props.sectionClassName}`}>
      <div
        className={`container ${
          props.containerClassName !== undefined ? props.containerClassName : ""
        }`}
      >
        {props.children}
      </div>
    </section>
  );
};
