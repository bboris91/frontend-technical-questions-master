import React from "react";
import styled from "@mui/material/styles/styled";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { timer } from "./util";

const StyledDiv = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  margin: 20,
});
const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: "50%",
  backgroundColor: theme.palette.secondary.light,
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "150px",
  height: "150px",
  color: theme.palette.primary.dark,
}));

const QuestionFour = () => {
  const { timer, isActive, handleStart, handleStop, handleReset } = timer(0);

  return (
    <StyledDiv>
      <Card sx={{ minWidth: "200px" }}>
        <CardHeader
          title={
            <Typography variant="h4" color="primary">
              Stopwatch
            </Typography>
          }
        />
        <StyledCardMedia>
          <Typography variant="h5">
            {moment.utc(timer * 1000).format("HH:mm:ss")}
          </Typography>
        </StyledCardMedia>
        <CardContent sx={{ justifyContent: "space-around", display: "flex" }}>
          {!isActive ? (
            <Button variant="contained" onClick={handleStart}>
              Start
            </Button>
          ) : (
            <Button variant="contained" onClick={handleStop}>
              Stop
            </Button>
          )}
          <Button variant="contained" onClick={handleReset} disabled={isActive}>
            Reset
          </Button>
        </CardContent>
      </Card>
    </StyledDiv>
  );
};

export default QuestionFour;
