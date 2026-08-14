export async function getMetaData(lang: string, path: string) {
  const metaData = await fetch(
    `http://localhost:3000/api/fetchMetaData?lang=${lang}&path=${path}`,
    { next: { revalidate: 60 } }
  ).then((res) => res.json());

  if (!metaData) {
    return null;
  } else {
    return metaData;
  }
}
