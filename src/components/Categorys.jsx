import styled from "styled-components";
import React from "react";
import FolderList from "../components/Category";

const ListDiv = styled.div`
  width: 70%;

  .list {
    display: flex;
    flex-flow: wrap;
    gap: 30px;
    justify-content: center;
    margin-top: 30px;
    cursor: pointer;
  }

  margin: auto;
`;
export const Categorys = () => {
  const arr = [
    "technology",
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
  ];
  return (
    <ListDiv>
      <div className="list">
        {arr.sort().map((e) => (
          <FolderList name={e} />
        ))}
      </div>
    </ListDiv>
  );
};
