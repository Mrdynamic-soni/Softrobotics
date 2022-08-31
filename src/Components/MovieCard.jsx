import React,{useState, useEffect} from 'react';
import Card from './Card';
const MovieCard = () => {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=2b5dce77";
    // const [movie, setMovie] = useState;
    // const getdata = async()=>{
    //     const response = await fetch(url);
    //     setMovie(response.json());
    //     console.log(response.json());
    // }
    // useEffect(()=>{
    //     getdata();
    // },[]);
    return (
        <>
            <div>
                {/* <div className='row'>
                    <div className='col'>

                    </div>
                    <div className='col'> */}
                        <h1 className='text text-center my-3'>Upcoming Movies</h1>
                    {/* </div>
                    <div className='col'>
                        <p className='my-4 mx-5 px-5'> Total Price inc. 18% GST : {ticket}</p>
                    </div>
                </div> */}
            </div>
            {/* {
                movie.map((currData)=>{
                    return(
                        <Card
                            name = {currData.Title}
                            poster = {currData.Poster}
                        />
                    )
                })
            } */}
            <Card
                name="Guardians of the Galaxy Vol. 2"
                poster="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
            />
        </>
    )
}

export default MovieCard