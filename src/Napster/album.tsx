import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import * as client from "./client";

export default function NapsterAlbumDetails() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [likes, setLikes] = useState<any>([]);
  const { albumId } = useParams();
  const [album, setAlbum] = useState<any>({});
  const [tracks, setTracks] = useState([]);
  const findAlbum = async (id: string) => {
    const album = await client.getAlbumDetails(id);
    setAlbum(album);
  };
  const findTracks = async (id: string) => {
    const tracks = await client.getAlbumTracks(id);
    setTracks(tracks);
  };
  const likeAlbum = async () => {
    await client.userLikesAlbum({ name: album.name, albumId: album.id });
  };
  const fetchLikes = async () => {
    if (albumId === undefined) return;
    const likes = await client.findUsersWhoLikedAlbum(albumId);
    setLikes(likes);
  };

  useEffect(() => {
    if (albumId) {
      findAlbum(albumId);
      findTracks(albumId);
      fetchLikes();
    }
  }, [albumId]);
  return (
    <div>
      <h1>
        {album.name}!!! {currentUser && currentUser.username}
      </h1>
      {currentUser && (
        <button onClick={likeAlbum} className="btn btn-warning">
          Like this album
        </button>
      )}
      <hr />
      <img src={client.albumImageUrl(album)} />
      <hr />
      {likes && likes.length > 0 && (
        <div>
          <h2>Liked by:</h2>
          <ul>
            {likes.map((like: any) => (
              <li key={like.id}>{like.username}</li>
            ))}
          </ul>
        </div>
      )}
      <ul className="list-group mt-2">
        {tracks &&
          tracks.length > 0 &&
          tracks.map((track: any) => (
            <li className="list-group-item" key={track.id}>
              {track.name}
              <audio
                className="float-end"
                controls
                src={track.previewURL}
              ></audio>
            </li>
          ))}
      </ul>
    </div>
  );
}
