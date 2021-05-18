import Head from "next/head";

function MyHead(props) {
  const { title } = props;
  const { content } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content}></meta>
    </Head>
  );
}

export default MyHead;
