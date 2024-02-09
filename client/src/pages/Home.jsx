import React ,{useState,useEffect}from 'react'
import Banner from '../components/Banner'
import axios from 'axios';
import { Movie } from '../components/Movie';
export const Home = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("all");
    const getData = () => {
        const url = `https://www.omdbapi.com/?&apikey=617a7d51`;
        const params = {
            s: search,
        };
        axios.get(url, { params })
            .then((res) => {
                console.log(res);
                setData(res.data.Search);
            })
            .catch((err) => console.log(err));
    }
 
 useEffect(() => {
    getData();
}, []);

console.log(data);
  return (
    <div className='home'>
        <Banner/>
       <h2 className='homeHeading'>Featured Movies</h2>
       <div className='container' id='container'>
                {data && data.map((movie) => (
                    <Movie movie={movie} key={movie.imdbID} />
                ))}
            </div>
    </div>
  )
}
