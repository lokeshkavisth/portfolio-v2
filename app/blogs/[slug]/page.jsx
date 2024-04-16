export default async function page({ searchParams }) {
  //   console.log(searchParams);
  const {
    coverImage,
    title,
    subtitle,
    content,
    url,
    readTimeInMinutes,
    views,
  } = searchParams;

  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
}
