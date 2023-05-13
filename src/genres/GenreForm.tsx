import { Link } from "react-router-dom"
import { Formik, Form, FormikHelpers } from 'formik';
import Button from "../Utilis/Button"
import * as Yup from 'yup';
import TextField from "../forms/TextField";
import { genreCreationDTO } from "./genres.model";



export default function GenreForm(props: genreFormProps) {


    return(

                                            
        <Formik initialValues={props.model}///............import values from modal()

            onSubmit={props.onSubmit}

            ///............import valibation for on submit from Validation.ts
            validationSchema={
                Yup.object({
                    name: Yup.string().required('ERROR MESSAGE SUCCESFUL:This field is required').firstLetterUppercase()
                })}
        >

            {(formikrops) => {
                return (

                    <Form>
                        {/* ///..........Import text field and setting from TextField componant*/}
                        <TextField field="name" displayName="Name" />
                        <Button disabled={formikrops.isSubmitting} type='submit'> Save Changes</Button>
                        <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                    </Form>



                );
            }}

        </Formik>


        )
}



interface genreFormProps {
    model: genreCreationDTO;
    onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void;
        
}