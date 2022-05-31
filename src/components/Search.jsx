import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import axios from "axios";
import MediaCard from "./Card";

const Div = styled.div`
  input {
    width: 40%;
    padding: 8px;
    margin-top: 20px;
    outline-style: none;

    border: 1px solid blue;

    border-radius: 10px;
  }
  button {
    padding: 8px 25px;
    margin-left: 10px;
    background-color: blue;
    color: white;
    border-radius: 10px;
    border: none;
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

export const Search = () => {
  const [text, setText] = useState("");
  const [news, setNews] = useState();
  const inputHandler = (e) => {
    setText(e.target.value);
  };
  console.log(news);
  return (
    <Div>
      <input
        type="text"
        placeholder="Search here"
        onChange={inputHandler}
        value={text}
      />
      <button
        onClick={() => {
          axios
            .get(
              `https://gnews.io/api/v4/search?q=${text}&token=a3ceba329e26b3a9f20850a9c7c92a3a&lang=${"en"}`
            )
            .then((data) => setNews(data.data.articles));
          setText("");
        }}
      >
        Search
      </button>

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
