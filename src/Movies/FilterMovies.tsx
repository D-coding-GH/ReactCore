import { Field, Form, Formik } from "formik";
import { genreDTO } from "../genres/genres.model";
import Button from "../Utilis/Button";

export default function FilterMovies() {

    const initialValues: filterMoviesForm = {

        title: ' ',
        genreId: 0,
        upcomingRelease: false,
        inTheaters: false


    }

    const genres: genreDTO[] = [{ id: 1, name: 'Drama' }, { id: 2, name: 'Action' }, { id: 3, name: 'Horror' }]

    return (
        <>
            <h3>Filter Movies</h3>
            <Formik initialValues={initialValues}
                onSubmit={values => console.log(values)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="row gx-3 align-items-centre" >
                            <div className="col-auto">
                                <input type="text" className="form-control" id="title"
                                    placeholder="Title of the Movie"
                                    {...formikProps.getFieldProps("title")}
                                />
                            </div>
                            <div className="col-auto" >
                                <select className="form-select"
                                    {...formikProps.getFieldProps("genreId")}

                                >
                                    <option value="0">--Choose a genre--</option>
                                    {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                                </select>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <Field className="form-check-imput" id="upcomingRelease" name="upcomingRelease" type="checkbox" />
                                    <label className="form-check-label" htmlFor="upcomingRelease"> Upcoming Releases </label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="form-check">
                                    <Field className="form-check-imput" id="inTheaters" name="inTheaters" type="checkbox" />
                                    <label className="form-check-label" htmlFor="inTheaters"> In Theaters </label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <Button className="btn btn-primary ms-3" onClick={() => formikProps.submitForm()}>Filter</Button>
                                <Button className="btn btn-danger ms-3" onClick={() => formikProps.setValues(initialValues)}>Clear</Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>

            
           
        </>

    )

}

interface filterMoviesForm {

    title: string;
    genreId: number;
    upcomingRelease: boolean;
    inTheaters:boolean

}