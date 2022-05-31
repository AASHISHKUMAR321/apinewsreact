import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { maxHeight, minHeight } from "@mui/system";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  margin: auto;
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

export const Show = ({}) => {
  const news = JSON.parse(localStorage.getItem("news"));

  console.log(news.newse);
  return (
    <Div>
      <div className="card">
        <Card sx={{ maxWidth: 800, maxHeight: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image={news.news.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {news.news.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {news.news.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{news.news.source.name}</Button>

            <Button
              size="small"
              onClick={() => {
                window.location.href = news.news.url;
              }}
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </Div>
  );
};
