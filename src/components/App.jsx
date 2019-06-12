import React,{Component} from 'react'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'

import About from '../views/about'
import Home from '../views/home'

export default class App extends Component{
  render(){
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to='/about'>About</NavLink>
              <NavLink className="list-group-item" to='/home'>Home</NavLink>

              {/*<a className="list-group-item" aria-current="false" href="/about">About</a>*/}
              {/*<a className="list-group-item activeClass" aria-current="true" href="/home">Home</a>*/}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
               <Switch>
                 <Route path='/about' component={About}/>
                 <Route path='/home' component={Home}/>
                 <Redirect to='/about'/>
               </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
