import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ReferInfoJs({ id, link, image, title, desc1, desc2, retuens, syntax, definition }){
    return (
        <li>
            <Link to={{ pathname: "refer-detail-js", state: { id, link, image, title, desc1, desc2, retuens, syntax, definition }}}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
            </Link>
        </li>
    )
}

ReferInfoJs.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    retuens: PropTypes.string.isRequired,
    syntax: PropTypes.array.isRequired,
    definition: PropTypes.array.isRequired,
}

export default ReferInfoJs;