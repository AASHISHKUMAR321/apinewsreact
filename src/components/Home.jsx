import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MediaCard from "./Card";

const Div = styled.div`
  width: 100%;
  background-color: #6200ee;
  color: white;
  bottom: 20px;
  .heading {
    font-size: 35px;
    width: 100%;
    height: 50px;

    color: white;
  }

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

export const Home = () => {
  let Arr = [1, 2, 3, 4, 5, 6];
  const [news, setNews] = useState();
  useEffect(() => {
    axios
      .get(
        `https://gnews.io/api/v4/top-headlines?token=a3ceba329e26b3a9f20850a9c7c92a3a&country=${"in"}&lang=${"en"}`
      )
      .then((data) => setNews(data.data.articles));
  }, []);
  return (
    <Div>
      {/* <h1>Api News</h1> */}

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
