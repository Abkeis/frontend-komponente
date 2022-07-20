export const HeaderWithSubtitle = (props) => {
  // console.log(JSON.stringify(props.data));
  return (
    <hgroup className="has-text-centered">
      <span className="subtitle">{props.subtitle}</span>
      <h2 className="title matro mt-4">{props.title}</h2>
    </hgroup>
  );
};
