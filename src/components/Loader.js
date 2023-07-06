import React from 'react';

import spinner from '../gif/spinner.gif';

const Loader = () => {
    return (
        <div>
            <img src={spinner}  alt='spinning'/>
            <h2>Loading...</h2>
        </div>
    );
};

export default Loader;