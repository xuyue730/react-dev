import React from "react";
import { connect } from "react-redux";
import { addGun, removeGun, addGunAsync } from "./index.redux";

// 装饰器
@connect(
    // 你要state什么属性放到props里
    state=>({num:state}),
    // 你要什么方法,放到props里,自动dispatch
    {addGun, removeGun, addGunAsync}
)
class App extends React.Component{
    render(){
        return (
            <div>
                <h1>现在有机枪{this.props.num}把</h1>
                <button onClick={this.props.addGun}> 申请武器 </button>
                <button onClick={this.props.removeGun}> 上缴武器 </button>
                <button onClick={this.props.addGunAsync}> 拖两天上缴 </button>
            </div> 
        )
    }
}

export default App



// 4-8 react-router4 路由 01-初识 React-router4 (08:54)