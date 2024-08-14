import * as client from "./client";
import NapsterAlbums from "./albums";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function NapsterSearch() {
  const { term } = useParams<{ term: string }>();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any>([]);

  const fullTextSearch = async (text: string) => {
    const results = await client.fullTextSearch(text);
    setResults(results);
    navigate(`/Kanbas/Napster/Search/${text}`);
  };
  useEffect(() => {
    if (term) {
      setSearch(term);
      fullTextSearch(term);
    }
  }, [term]);

  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => fullTextSearch(search)}>Search</button>
      {results &&
        results.search &&
        results.search.data &&
        results.search.data.albums &&
        results.search.data.albums.length > 0 && (
          <>
            <h2>Albums</h2>
            <NapsterAlbums albums={results.search.data.albums} />
          </>
        )}
    </div>
  );
}
