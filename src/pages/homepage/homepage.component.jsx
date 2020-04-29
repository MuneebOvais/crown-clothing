import React from 'react'; //every component file needs to import react
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'

const HomePage = () => (
    <div className='homepage'>
        <Directory />
    </div>
);

export default HomePage;