import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [state, setState] = useState("");

  useEffect(() => {
    let url = `https://www.omdbapi.com/?apikey=617a7d51&i=${id}`;
    fetching(url);
  }, []);

  const fetching = (url) => {
    axios
      .get(url)
      .then((res) => {
        setState(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const addToFavourite = () => {
    alert("Movie added");
    const arr = JSON.parse(localStorage.getItem("favorite")) || [];
    const fav = [...arr, state];
    localStorage.setItem("favorite", JSON.stringify(fav));
  };

  return (
    <Box bgcolor="#f9f9f9" minHeight="100vh" padding="20px" mt='80px'>
      <Box maxWidth="800px" margin="auto" bgcolor="white" borderRadius="10px" overflow="hidden">
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
          <Box flex="1" order={{ xs: 2, md: 1 }} padding="20px">
            <Typography variant="h4">{state.Title}</Typography>
            <Box display="flex" alignItems="center" marginTop="10px">
              <Button size="small" variant="outlined" color="primary" style={{ marginRight: "10px" }}>{state.Rated}</Button>
              <Typography>{state.Genre}</Typography>
            </Box>
            <Typography color="textSecondary" marginTop="10px">{state.Plot}</Typography>
            <Box display="flex" marginTop="10px">
              <Typography fontWeight="500">Writers:</Typography>
              <Typography marginLeft="5px">{state.Writer}</Typography>
            </Box>
            <Box display="flex" marginTop="10px">
              <Typography fontWeight="500">Language:</Typography>
              <Typography marginLeft="5px">{state.Language}</Typography>
            </Box>
            <Box display="flex" marginTop="10px">
              <Typography fontWeight="500">Country:</Typography>
              <Typography marginLeft="5px">{state.Country}</Typography>
            </Box>
            <Box display="flex" marginTop="10px">
              <Typography fontWeight="500">Awards:</Typography>
              <Typography marginLeft="5px">{state.Awards}</Typography>
            </Box>
            <Box marginTop="20px">
              <Button variant="contained" color="primary" style={{ backgroundColor:"rgb(181,11,23)"}} onClick={addToFavourite}>Add to Favorites</Button>
            </Box>
          </Box>
          <Box flex="1" order={{ xs: 1, md: 2 }}>
            <img src={state.Poster} alt={state.Title} style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
