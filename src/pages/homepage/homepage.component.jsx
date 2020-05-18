import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component.jsx';

const HomePage = (props) => (
    console.log(props),
    <div className='homepage'>
        <Directory/>
    </div>
);

export default HomePage;