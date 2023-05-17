import { useFormikContext } from 'formik';
import coordinateDTO from '../Utilis/coordinates.model';
import Map from '../Utilis/Map'

export default function MapField(props: mapFieldProps) {

    const {values} = useFormikContext<any>();

    function handleMapClick(coordinates: coordinateDTO) {

        values[props.latField] = coordinates.lat;
        values[props.lngField] = coordinates.lng;
        console.log(values)
    }


    return (

        <Map

            coordinates={props.coordinates}
            handleMapClick={handleMapClick}
            

        />


    )


}

interface mapFieldProps {

    coordinates: coordinateDTO[];
    latField: string;
    lngField: string;

}

MapField.defaultProps = {

    coordinates:[]

}
