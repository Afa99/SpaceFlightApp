import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { Item } from "./components/item/item";
import "./home.scss"

export interface Article {
  id: number;
  featured: boolean;
  default: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
}

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([] as Array<Article>);
  const [isLoading, setIsLoading] = useState(false);
  const resetState = () => {
    setResult([]);

    setIsLoading(false);
  };

  const loadItems = useCallback(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.spaceflightnewsapi.net/v3/articles/?_limit=100&summary_contains=${keyword}`
      )
      .then((response) => {
        setResult(response.data);
        setIsLoading(false);
      });
  }, [isLoading, keyword, result]);

  useEffect(loadItems, []);



  return (
    <>
      <div className="container">
        <h1>Filter by keyword</h1>
        <div className="search">
          <SearchIcon fontSize="large" />
        </div>

        <input
          type="text"
          className="form-control"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            resetState();
            loadItems();
          }}
        >
          Get Photo
        </button>
        {result.length ? (
          <h1 className="result">Results:{result.length}</h1>
        ) : null}
        <div className="border"></div>
      </div>

      <div className="result-container">
        <b>
          {result.map((value, index) => (
            <Item value={value} keyword={keyword} />
          ))}
        </b>
      </div>
    </>
  );
}
