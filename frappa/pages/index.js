import Head from "next/head";
import Image from "next/image";
import SpotifyCard from "../components/SpotifyCard";

export async function getStaticProps(context) {
  const res = await fetch(
    `https://v1.nocodeapi.com/frappa/spotify/DcAbSztjwcFwYTks/myPlaylists?perPage=50`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  } else {
    console.log(data);
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Home({ data }) {
  return (
    <div>
      <main>
        <div>
          <SpotifyCard playlists={data} />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
