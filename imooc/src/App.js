import React from "react";

class App extends React.Component{
    // constructor(props) {
    //     super(props)
    // }
    render(){
        const store = this.props.store
        const num = store.getState()
        return <h1>现在有机枪${num}</h1>
    }
}

export default App