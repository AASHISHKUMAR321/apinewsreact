import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import MediaCard from "./Card";

const Div = styled.div`
  width: 100%;

  color: white;
  bottom: 20px;
  .card {
    display: flex;
    flex-flow: wrap;
    gap: 30px;
    justify-content: center;
    margin-top: 30px;
    cursor: pointer;
    position: inherit;
  }
`;

export const ShowNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://gnews.io/api/v4/top-headlines?token=a3ceba329e26b3a9f20850a9c7c92a3a&topic=${id}&lang=${"en"}`
      )
      .then((data) => setNews(data.data.articles));
  }, []);
  console.log(news);
  return (
    <Div>
      <div className="card">
        {news?.map((e) => {
          return (
            <MediaCard
              title={e.title}
              image={e.image}
              description={e.description}
              news={e}
            />
          );
        })}
      </div>
    </Div>
  );
};
