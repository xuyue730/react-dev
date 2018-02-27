import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import App from './App'
import { counter, addGun, removeGun, addGunAsync } from "./index.redux";

const store = createStore(counter,applyMiddleware(thunk))

function render() {
    ReactDom.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync}>,document.getElementById('root'))
}

render()

store.subscribe(render)




// 即将开始   Redux状态管理5-Chrome 中 Redux 调式工具