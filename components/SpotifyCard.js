export async function getStaticProps() {
  const res = await fetch(`https://api.spotify.com/v1/users/1166969079/playlists
  `);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default function SpotifyCard({ data }) {
  console.log(data);
  return (
    <>
      <h1></h1>
    </>
  );
}
