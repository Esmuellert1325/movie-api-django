import Movie from "../components/Movie";
import style from '../styles/ListPage.module.css';
import {useState, useEffect} from 'react';

const ListPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000')
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []);

    return (
        <div className={style.container}>
            <h1>Your list of movies</h1>
            <Movie
                id={1}
                title={"Evil Dead"}
                year={2013}
                genre={"Horror"}
                description={"Five friends head to a remote cabin, where the discovery of a Book of the Dead leads them to unwittingly summon up demons living in the nearby woods."}
                coverArt={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3241485a-ef9d-4cac-a879-3cbc005e27f2.jpg"}
            />
            {
                movies?.map((movie: any, idx) => (
                    <Movie 
                        id={idx}
                        title={movie.title}
                        year={movie.year}
                        genre={movie.genre}
                        description={movie.desc}
                        coverArt={movie.cover}
                    />
                ))
            }
        </div>
    )
}

/*
            <Movie
                id={2}
                title={"Evil Dead"}
                year={2013}
                genre={"Horror"}
                description={"Five friends head to a remote cabin, where the discovery of a Book of the Dead leads them to unwittingly summon up demons living in the nearby woods."}
                coverArt={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3241485a-ef9d-4cac-a879-3cbc005e27f2.jpg"}
            />
            */

export default ListPage;