import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ReferInfoCss({link, id, title, desc1, desc2, apply, default1, definition, use, version}){
    return (
        <li>
            <Link to={{ pathname: "refer-detail-css", state: {link, id, title, desc1, desc2, apply, default1, definition, use, version}}}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc1}</span> 
            </Link>
        </li>
    )
}

ReferInfoCss.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    default1: PropTypes.string.isRequired,
    apply: PropTypes.string.isRequired,
    definition: PropTypes.array.isRequired,
    use: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
}

export default ReferInfoCss;