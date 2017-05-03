const css = require('./app.scss');

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Login from "./components/Login"
import store from "./store"
import Validate from "./components/Validate"
import Header from "./components/Header"
import Table from "./components/MetsahaldurViewTable"
import MetsahaldurView from "./components/MetsahaldurView"
import MetsCard from "./components/MetsCard"
import DetailsWrapper from "./components/DetailsWrapper";
import MetsahaldurViewTable from "./components/MetsahaldurViewTable"

class App extends React.Component {

    render() {
        return (
            <Router>

                <div className="main__wrapper">

                    <Link to={'/login'}>Login</Link>
                    <Link to={'/newuser'}>Kasutaja valideerimine</Link>
                    <Route path="/login" component={Login}/>
                    <Route path="/newuser" component={Validate}/>
                    <Route path="/" exact={true} render={()=>(<p>Lingid kiireks vaadete vahetamiseks on praegu siin kohal.</p>)}/>
                    <MetsahaldurViewTable/>

                </div>

            </Router>
        );
    }
}


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));