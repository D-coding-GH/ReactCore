import ActorForm from "./ActorForm";

export default function EditActor() {

    return (
        <>
            <h3>Edit Actor</h3>
            <ActorForm model={{
                name: 'Random Actor Name is this', dateOfBirth: new Date('1983-10-08:00:00:00'),
                Biography: `#Something
                This Persom some information`,
                pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Johnny_Depp_2020.jpg/220px-Johnny_Depp_2020.jpg'
            }}
                onSubmit={values => console.log(values)}
            />
        </>

    )

}