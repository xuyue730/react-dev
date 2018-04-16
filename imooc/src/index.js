import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware,compose } from "redux"
import thunk from 'redux-thunk'
import App from './App'
import { counter, addGun, removeGun, addGunAsync } from "./index.redux";


const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))



function render() {
    ReactDom.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync}/>,document.getElementById('root'))
}

render()

store.subscribe(render)

// 即将开始   Redux状态管理5-Chrome 中 Redux 调式工具