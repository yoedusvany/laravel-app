import React from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import { SidebarComponent } from './layout/sidebar/SidebarComponent';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { BookList } from './books/BookList';


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {/*<SidebarComponent/>*/}
                <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={BookList} />
                    </Switch>
                </>
                </Router>
            </div>
        )
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(
        <App />
        , document.getElementById('app'));
}