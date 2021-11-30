import React from 'react'
import './buttons.sass'

const ButtonsPagination = (props) => {
    const { children, className } = props;
    return(
        <div className = { className }>
                { children }
        </div>
    );
}

export default ButtonsPagination;