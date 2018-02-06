import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from "redux";
import App from '/App'
import { counter } from "./index.redux";

const store = createStore(counter)

function render() {
    ReactDom.render(<app store={store}/>,document.getElementById('root'))
}

render()







