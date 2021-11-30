import React from 'react';
import './ButtonPagination.sass';

const ButtonPagination = ( props ) => {
    const { className } = props;
    return(
        <div className ={className}>
                <button>Prev</button>
                <button>Next</button>
        </div>
    );
}

export default ButtonPagination;