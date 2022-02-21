import React from 'react';
import VessleCard from '../components/VessleCard';
import { useParams, useHistory } from "react-router-dom"


function VessleShow({ vessles, deleteVessle }) {

    const params = useParams()

    const history = useHistory()

    const vessle = vessles.find((vessle) => vessle.id === +params.id)

    const handleDeleteVessle = async () => {
        const success = await deleteVessle(+params.id)
        if (success) {
            history.push('/vessles')
        }
    }

    return <div>
        <VessleCard vessle={vessle} deleteVessle={handleDeleteVessle} />
    </div>;
}

export default VessleShow;
