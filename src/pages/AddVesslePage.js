import React from 'react';
import AddVessle from '../components/AddVessle';



function AddVesslePage({ addVessle }) {
    return <div>
        <AddVessle onAddVessle={addVessle} />
    </div>;
}

export default AddVesslePage;
