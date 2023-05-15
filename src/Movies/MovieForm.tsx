import { Form, Formik, FormikHelpers } from 'formik';
import { movieCreationDTO } from "./movies.model";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import Button from "../Utilis/Button";
import TextField from '../forms/TextField';
import DateField from '../forms/DateField';
import ImageField from '../forms/ImageField';
import CheckboxField from '../forms/CheckboxField';
import MultipleSelector, { multipleSelectorModel } from '../forms/MultipleSelector';

export default function MovieForm(props:movieFormProps) {


        return(

            <Formik
                initialValues={props.model}
                onSubmit={props.onSubmit}
                validationSchema={
                    Yup.object({
                        name: Yup.string().required('DIFFERENT ERROR MESSAGE SUCCESFUL:This field is required').firstLetterUppercase(),
                        dateOfBirth: Yup.date().nullable().required('This field is required')
                    })}
            >
                {(formikProps) => (
                    <Form>
                        <TextField displayName="Title" field="title" />
                        <CheckboxField displayName="In Theaters" field="inTheaters" />
                        <TextField  displayName="Trailer" field="trailer" />
                        <DateField  displayName="Release Date" field="releaseDate" />
                        <ImageField displayName="Poster" field="poster" imageURL={props.model.posterURL} />     
                        <MultipleSelector displayName={'Genres'} selected={[]} nonSelected={[]} onChange={(selected, nonSelected) => { }} />
                        <Button disabled={formikProps.isSubmitting} type="submit"> Save Changes</Button>
                        <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                    </Form>
                )}
            </Formik>
        )
}

interface movieFormProps {
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, action: FormikHelpers<movieCreationDTO>): void;
}