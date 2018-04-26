import React from "react";
import { Link, Route } from "react-router-dom";
import App from './App'

function Erying() {
    return <h2>Erying</h2>
}
function Qibinglian() {
    return <h2>Qibinglian</h2>
}
class Dashboard extends React.Component {
    constructor (props) {
        super(props)
        
    }
    render () {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/dashborad/'>一营</Link>
                    </li>
                    <li>
                        <Link to='/dashborad/erying'>二营</Link>
                    </li>
                    <li>
                        <Link to='/dashborad/qibinglian'>骑兵连</Link>
                    </li>
                </ul>
                <Route path='/dashborad' exact component={App}></Route>
                <Route path='/dashborad/erying' component={Erying}></Route>
                <Route path='/dashborad/qibinglian' component={Qibinglian}></Route>
            </div>
        )
    }
}

export default Dashboard