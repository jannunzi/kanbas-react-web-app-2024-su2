import { Navigate, Route, Routes } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";

export default function Labs() {
  return (
    <div>
      <h1>Jose Annunziato</h1>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="/Lab1" element={<Lab1 />} />
        <Route path="/Lab2" element={<Lab2 />} />
        <Route path="/Lab3" element={<Lab3 />} />
      </Routes>
      <a href="https://github.com/jannunzi/kanbas-react-web-app-2024-su2">
        GitHub
      </a>
    </div>
  );
}
