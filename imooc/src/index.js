import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware,compose } from "redux"
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link, Redirect,Switch } from "react-router-dom";

import { counter } from "./index.redux";
import Auth from "./Auth";
import Dashborad from "./Dashboard";

const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))

class Test extends React.Component {
    constructor (props) {
        super(props)

    }
    render() {
        console.log(this.props);
        return <h2> 测试组件 { this.props.location } </h2>
    }
}


ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Auth}></Route>
                <Route path="/dashborad" component={Dashborad}></Route>
                <Redirect to="/dashborad"></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)
