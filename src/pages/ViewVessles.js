import React from 'react';
import VessleList from '../components/VessleList'




function ViewVessles({ vessles, }) {
    return <div>
        <VessleList vessles={vessles} />

    </div>;
}

export default ViewVessles;
