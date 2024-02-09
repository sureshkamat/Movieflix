
import React, { useEffect ,useState} from 'react';
import { useSearchContext } from './SearchContext';
import axios from 'axios';
import { Movie } from '../components/Movie';
import { Button } from '@mui/material';
const Search = () => {
  const { searchQuery } = useSearchContext();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const getData = () => {
    const url = `https://www.omdbapi.com/?&apikey=617a7d51`;
    const params = {
        s: searchQuery,
        page: page,
    };
    axios.get(url, { params })
        .then((res) => {
            console.log(res);
            setData(res.data.Search);
        })
        .catch((err) => console.log(err));
}
  useEffect(() => {
   
    console.log('Fetching data for search query:', searchQuery);
    getData();
  }, [searchQuery,page]);

  return (
    <div className='searchbox'> 
      <h2>Search Results for: {searchQuery}</h2>
      
      <div className='container' id='container'>
                {data && data.map((movie) => (
                    <Movie movie={movie} key={movie.imdbID} />
                ))}
                {
                    !data && <h2>No Data Found</h2>
                }
            </div>
            <div className='pagination'>
                <Button style={{ backgroundColor:"rgb(181,11,23)",color:"white"}} disabled={page===1} onClick={()=>setPage(page-1)}>Prev</Button>
                <Button style={{ backgroundColor:"rgb(181,11,23)",color:"white"}} >{page}</Button>
                <Button style={{ backgroundColor:"rgb(181,11,23)",color:"white"}} onClick={()=>setPage(page+1)}>Next</Button>
            </div>
    </div>
    
  );
};

export default Search;
