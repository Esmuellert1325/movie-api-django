import style from '../styles/Movie.module.css';

type MovieProps = {
    id: number,
    title: string,
    year: number,
    genre: string,
    description: string,
    coverArt: string
};

const Movie = ({ id, title, year, genre, description, coverArt }: MovieProps) => {
    return (
        <div key={id} className={style.box}>
            <img src={coverArt} alt={title} />
            <h2>{title}</h2>
            <h3>{year}</h3>
            <h3>{genre}</h3>
            <h4>{description}</h4>
        </div>
    )
}

export default Movie;