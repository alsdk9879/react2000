import React from 'react';

function WrapTitle(porps){
    return (
        <div class="wrap__title">
            <h2><strong>{porps.text[0]}</strong><em>{porps.text[1]}</em></h2>
        </div>
    )
}

export default WrapTitle;