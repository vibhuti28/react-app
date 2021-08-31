import { Route, Switch } from 'react-router-dom';
import Blog from './components/BlogPages/Blog';
import AboutUs from './components/BlogPages/AboutUs';
import Contact from './components/BlogPages/Contact';
import Post from './components/BlogPages/Post';

export default function Body() {
    return (
        <div id="page-container">
            <Switch>
                <Route path="/" exact component={Blog} />
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={Contact} />
                <Route path="/post/:id" exact component={Post} />
            </Switch>
        </div>
    );
}