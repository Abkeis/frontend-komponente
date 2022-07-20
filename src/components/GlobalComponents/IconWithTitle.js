import Image from "next/image";

export const IconWithTitle = (props) => {
  return (
    <div className="column is-3">
      <Image
        alt={props.title}
        src={props.url}
        width={96}
        height={96}
        priority
      />
      <span className="label">{props.title}</span>
    </div>
  );
};
