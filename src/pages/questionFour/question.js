import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import kobayashiMaru from "./images/kobayashiMaru.jpg";
import solution from "./images/solution.gif";

const question = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Question Four
      </Typography>
      <Typography variant="h5" gutterBottom>
        Kobayashi Maru
      </Typography>
      <Paper sx={{ textDecoration: "line-through", margin: "10px 0" }}>
        <Typography variant="body1" gutterBottom>
          Kirk solves the unsolvable by changing the rules, this is your chance
          to show us how you would solve your own Kobayashi Maru.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your task if you choose to accept it, is to write your own test and
          create a challenge for us to solve!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Ideally it would be written as a bug, but the complexity and
          requirements are up to you. So 'show us what you got'!
        </Typography>
        <CardMedia
          image={kobayashiMaru}
          style={{
            width: "100%",
            height: 200,
            backgroundSize: "contain",
          }}
          title="The Solution"
        />
      </Paper>
      <Paper>
        <Typography variant="h5" gutterBottom>
          In the picture below is the desired solution
        </Typography>
        <CardMedia
          image={solution}
          style={{
            width: "100%",
            height: 250,
            backgroundSize: "contain",
          }}
          title="The Solution"
        />
      </Paper>
    </div>
  );
};

export default question;
