import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { landingPageDTO } from "./movies.model";


export default function LandingPage() {

    const [movies, setMovies] = useState<landingPageDTO>({});


    useEffect(() => {
        const timerId = setTimeout(() => {
            setMovies({
                inTheaters: [
                    {
                        id: 1,
                        title: 'Nope',
                        poster: 'https://m.media-amazon.com/images/M/MV5BZjI4YWU5MWUtZTg4ZC00MmYzLWIyMjMtODhhOGQ4YTY5MmVkXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg'

                    },
                    {
                        id: 2,
                        title: 'Nope',
                        poster: 'https://m.media-amazon.com/images/M/MV5BZjI4YWU5MWUtZTg4ZC00MmYzLWIyMjMtODhhOGQ4YTY5MmVkXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg'

                    }
                ],
                upcomingRelease: [
                    {
                        id: 3,
                        title: 'Nope',
                        poster: 'https://m.media-amazon.com/images/M/MV5BZjI4YWU5MWUtZTg4ZC00MmYzLWIyMjMtODhhOGQ4YTY5MmVkXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg'

                    },
                    {
                        id: 4,
                        title: 'Nope',
                        poster: 'https://m.media-amazon.com/images/M/MV5BZjI4YWU5MWUtZTg4ZC00MmYzLWIyMjMtODhhOGQ4YTY5MmVkXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg'

                    }
                ]
            })
        }, 1000);
        return () => clearTimeout(timerId)
    });



    return (
        <>
            <h3>In Theaters</h3>
            <MovieList movies={movies.inTheaters} />

            <h3>Up Coming Release</h3>
            <MovieList movies={movies.upcomingRelease} />
        
        </>
        )
}