import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div 
    className={`menu-item ${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className='background-image'
            style={{backgroundImage: `url(${imageUrl})`}}
        ></div>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)


export default withRouter(MenuItem);


// In the above example we destructured the props to save typing
// Because we have several properties on our props
// we could always say props.title etc.
/* const MenuItem = (props) => (
    <div className='menu-item'>
        <div className='content'>
            <h1 className='title'>{props.title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
) */