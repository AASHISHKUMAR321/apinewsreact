import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { maxHeight, minHeight } from "@mui/system";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Butt = styled.div`
  padding: 10px;

  display: flex;
  margin: auto;
  position: sticky;
`;

export default function MediaCard({ title, image, description, news }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ maxWidth: 300, maxHeight: 500 }}
      onClick={() => {
        localStorage.setItem("news", JSON.stringify({ news }));
        navigate("/show");
      }}
    >
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Butt>
          <Button
            size="small"
            onClick={() => {
              console.log("cliked");
            }}
          >
            Share
          </Button>
          <Button size="small">Learn More</Button>
        </Butt>
      </CardActions>
    </Card>
  );
}
