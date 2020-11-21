import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './top-page.js'
import Navbar from './top-page.js';


class MainPage extends React.Component {

    render() {
        return(
            <Navbar />
        )
    }


}



// =============================




ReactDOM.render(
    <MainPage />,
    document.getElementById('root')    
)