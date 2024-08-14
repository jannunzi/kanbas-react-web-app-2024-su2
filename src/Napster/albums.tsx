import * as client from "./client";
import { Link } from "react-router-dom";
export default function NapsterAlbums({ albums }: { albums: any[] }) {
  return (
    <div className="table-responsive">
      <table className="table">
        <tbody>
          <tr>
            {albums.map((album) => (
              <td className="album" key={album.id}>
                <Link to={`/Kanbas/Napster/Albums/${album.id}`}>
                  <img src={client.albumImageUrl(album)} />
                  <h3>{album.name}</h3>
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
