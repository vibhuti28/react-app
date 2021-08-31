import React from 'react';
import './App.css';
import './components/media.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Header />
                    <Body />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;