import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {

    return (
        <>
            <h3>Edit Move Theater</h3>
            <MovieTheaterForm
                model={{ name: 'Manchester', latitude: 53.479276, longitude: -2.239096 }}
                onSubmit={values => console.log(values)}
            />
        </>

    )

}