import GenreForm from "./GenreForm";





export default function CreateGenre() {
    // const history = useHistory()
    return (
        <>
            <h3>Create Genre</h3>
            <GenreForm model={{ name:'  '}}

                onSubmit={values => console.log(values)}
            />




        </>

    )

}