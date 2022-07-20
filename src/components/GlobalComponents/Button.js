import Link from "next/link";

export const Button = (data, request_button, label_button) => {
  return (
    <Link href="/">
      <a
        title={request_button}
        target={data.target || "_blank"}
        className={`button is-outlined is-rounded`}
      >
        {label_button}
      </a>
    </Link>
  );
};
