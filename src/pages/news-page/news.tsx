import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./news.scss";
import { Article } from "../home-page/home";
import ArrowBack from "@mui/icons-material/ArrowBack";

export default function News() {
  const [data, setData] = useState({} as Article);
  let { id, keyword } = useParams();

  const loadItem = useCallback(() => {
    axios
      .get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
      .then((response) => {
        setData(response.data);
      });
  }, [id, keyword]);

  useEffect(loadItem, [id]);
  if (!data) return null;
  return (
    <div className="box">
      <img className="photo" src={data.imageUrl}></img>
      <section className="head">
        <section className="title">
          <h3>{data.title}</h3>
        </section>
        <h4>{data.summary}</h4>
     
      </section>
      <section className="back">
          <ArrowBack fontSize="small" />
          Back to homepage
        </section>
    </div>
  );
}
