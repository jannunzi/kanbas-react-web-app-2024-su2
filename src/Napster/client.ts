import axios from "axios";

const NAPSTER_IMAGE_URL = "https://api.napster.com/imageserver/v2";
const KEY = process.env.REACT_APP_NAPSTER_API_KEY;
const NAPSTER_API = "https://api.napster.com/v2.2";

export const albumImageUrl = (album: any) =>
  `${NAPSTER_IMAGE_URL}/albums/${album.id}/images/300x300.jpg`;

export const fullTextSearch = async (text: string) => {
  const response = await axios.get(
    `${NAPSTER_API}/search/verbose?query=${text}&apikey=${KEY}`
  );
  return response.data;
};

export const getAlbumDetails = async (albumId: string) => {
  const response = await axios.get(
    `${NAPSTER_API}/albums/${albumId}?apikey=${KEY}`
  );
  return response.data.albums[0];
};

export const getAlbumTracks = async (albumId: string) => {
  const response = await axios.get(
    `${NAPSTER_API}/albums/${albumId}/tracks?apikey=${KEY}`
  );
  return response.data.tracks;
};

const NODE_API = "http://localhost:4000";

const axiosWithCredentials = axios.create({
  withCredentials: true,
});

export const userLikesAlbum = async (album: any) => {
  const response = await axiosWithCredentials.post(
    `${NODE_API}/api/likes`,
    album
  );
  return response.data;
};

export const findAlbumsLikedByUser = async () => {
  const response = await axiosWithCredentials.get(`${NODE_API}/api/likes`);
  return response.data;
};

export const findUsersWhoLikedAlbum = async (albumId: string) => {
  const response = await axiosWithCredentials.get(
    `${NODE_API}/api/likes/${albumId}`
  );
  return response.data;
};
