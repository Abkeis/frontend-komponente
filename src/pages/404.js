import { getOptions } from "../hooks/getOptions";

export default function Custom404({}) {
  return <></>;
}

export async function getStaticProps(_context) {
  const options = await getOptions();

  return {
    props: {
      options,
    },
    revalidate: 120, // In seconds
  };
}
