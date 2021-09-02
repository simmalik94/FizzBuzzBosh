import React, { useState } from "react";
import "./App.css";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [input, setInput] = useState("");
  const paperStyle = {
    backgroundColor: "lightBlue",
    margin: "100px auto",
    height: "20vh",
    width: "300px",
  };
  const btnStyle = {
    margin: "40px",
  };
  const fizz = num => {
    if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
      toast.success("FizzBuzzBosh!");
    } else if (num % 5 === 0 && num % 7 === 0) {
      toast.success("BuzzBosh!");
    } else if (num % 3 === 0 && num % 7 === 0) {
      toast.success("FizzBosh!");
    } else if (num % 3 === 0 && num % 5 === 0) {
      toast.success("FizzBuzz!");
    } else if (num % 7 === 0) {
      toast.success("Bosh!");
    } else if (num % 5 === 0) {
      toast.success("Buzz!");
    } else if (num % 3 === 0) {
      toast.success("Fizz!");
    } else {
      toast.error("None!");
    }
  };
  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleClick = e => {
    fizz(input);
  };

  return (
    <div className='App'>
      <ToastContainer></ToastContainer>
      <Grid>
        <Typography
          style={{
            color: "red",
            border: "1px solid",
            width: "300px",
            borderRadius: "5px",
            margin: "10px auto",
          }}
        >
          FIZBUZZBOSH!!
        </Typography>
        <Paper elevation={10} style={paperStyle}>
          <TextField
            label='Enter a Number!'
            value={input}
            fullWidth
            onChange={handleChange}
          >
            Hello
          </TextField>
          <Button
            variant='contained'
            color='secondary'
            style={btnStyle}
            onClick={handleClick}
          >
            FizBuzzBosh!
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default App;
