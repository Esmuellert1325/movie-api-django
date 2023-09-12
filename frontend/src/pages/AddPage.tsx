import { useState } from 'react';
import style from '../styles/AddPage.module.css';

interface Movie {
    title: string;
    year: string;
    genre: string;
    desc: string;
    cover: string;
}

const AddPage = () => {
    const [movie, setMovie] = useState<Movie>({
        title: '',
        year: '',
        genre: '',
        desc: '',
        cover: '',
    });

    const addMovie = (e: any) => {
        e.preventDefault();
        console.log(movie);

        fetch('http://127.0.0.1:8000/add/', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie)});
    }

    const handleChange = (e: any) => {
        setMovie(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <div className={style.container}>
            <form onSubmit={addMovie}>
                <h1>Fill out the movie details</h1>

                <input type="text" name='title' onChange={handleChange} />
                <label htmlFor="title">{movie['title'].length === 0 ? "Title" : null}</label>
                <span className={style.bar}></span>

                <input type="text" name='year' onChange={handleChange} />
                <label htmlFor="year">{movie['year'].length === 0 ? "Release year" : null}</label>
                <span className={style.bar}></span>

                <input type="text" name='genre' onChange={handleChange} />
                <label htmlFor="genre">{movie['genre'].length === 0 ? "Genre" : null}</label>
                <span className={style.bar}></span>

                <input type="text" name='desc' onChange={handleChange} />
                <label htmlFor="desc">{movie['desc'].length === 0 ? "Description" : null}</label>
                <span className={style.bar}></span>

                <input type="text" name='cover' onChange={handleChange} />
                <label htmlFor="cover">{movie['cover'].length === 0 ? "Cover Art URL" : null}</label>
                <span className={style.bar}></span>

                <button className={style.addBtn} type='submit'>ADD MOVIE</button>
            </form>
        </div>
    )
}

export default AddPage;