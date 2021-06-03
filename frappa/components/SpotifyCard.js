import Image from "next/image";
export default function SpotifyCard({ playlists }) {
  return (
    <div className="favorite_music">
      <style jsx>{`
        .favorite_music {
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px;
        }
        .playlist_grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 50px;
        }
        .playlist_single {
          text-align: center;
          border-radius: 10px;
          box-shadow: 5px 10px 20px #0000001f;
          padding: 30px 20px;
          background-color: #000;
        }
        .playlist_single img {
          border-radius: 5px;
          box-shadow: 0px 0px 30px 0px #ffffff47;
        }
        .playlist_single h3 {
          color: #fff;
        }
        .playlist_single p {
          color: #fff;
        }
        .favorite_music > p {
          text-align: center;
          color: grey;
        }
        .favorite_music > p > a {
          color: black;
        }
      `}</style>

      <h1>La mia musica preferita</h1>
      <div className="playlist_grid">
        {playlists.items.map((pl, index) => (
          <>
            {pl.owner.display_name === "frappa" ? (
              <div key={index} className="playlist_single">
                <a href={pl.external_urls.spotify} target="_blank">
                  <img src={pl.images[0].url} width="280" height="280" />
                </a>
                <a href={pl.external_urls.spotify} target="_blank">
                  <h3>{pl.name}</h3>
                </a>
                {pl.description ? <p>{pl.description}</p> : ""}
              </div>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
      <p>
        Made with{" "}
        <a href="https://nocodeapi.com/" target="_blank">
          NoCodeAPI
        </a>
      </p>
    </div>
  );
}
