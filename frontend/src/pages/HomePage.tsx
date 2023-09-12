import style from '../styles/HomePage.module.css';

const HomePage = () => {
    return (
        <div className={style.container}>
            <div>
                <h1>Welcome to the homepage!</h1>
                <h4>Are you a movie enthusiast always on the lookout for the latest and greatest films? Look no further!</h4> 
                <h4>Our Movie API offers an incredible platform for managing your movie collection effortlessly.</h4>
                <h4>With our Movie API, you have the power to add your favorite movies to our ever-expanding database. Once you've added your movies, they will be securely stored in our reliable and efficient database.</h4>
                <h4>The best part? Our Movie API lets you list and view all your saved movies with ease. Forget about searching through scattered lists or juggling multiple platforms.</h4>
                <h4>Get started today, and experience the convenience of managing your movie collection with our Movie API!</h4>
            </div>
        </div>
    )
}

export default HomePage;