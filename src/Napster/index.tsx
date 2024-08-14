import { Routes, Route, Navigate } from "react-router";
import NapsterAlbumDetails from "./album";
import NapsterSearch from "./search";

export default function Napster() {
  return (
    <div>
      <h1>Napster</h1>
      <Routes>
        <Route path="/" element={<Navigate to="Search" />} />
        <Route path="Search" element={<NapsterSearch />} />
        <Route path="Search/:term" element={<NapsterSearch />} />
        <Route path="Albums/:albumId" element={<NapsterAlbumDetails />} />
      </Routes>
    </div>
  );
}
