import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";


const Parse = (props) => {
  const {parse} = props
  return(
    <div>
      {parse.h1 && parse.h1.map((el,index) => {
        return(
          <ul key={index} >
            <li style={{textAlign: 'left'}}>{index}</li>
            <li style={{textAlign: 'left'}}> innerText : {el.innerText}</li>
            <li style={{textAlign: 'left'}}> innerHtml: {el.innerHtml}</li>
          </ul>
        )
      })}
    </div>
  )
}

const Contains = (props) => {
  const {contains} = props
  return(
    <div style={{fontSize: 20}}>
      {contains.exist.toString() }
    </div>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state={
      parse: {h1: []},
      contains: {exist: ''}
    }
  }
  componentDidMount(){
    const {match, history} = this.props
    if(history.location.pathname==='/parse'){//} && match.params.endpoint && match.params.tag){
      fetch('http://127.0.0.1:8000/parse/'+history.location.search)
      .then(results => {
        return results.json()
      })
      .then(data => {
        this.setState({parse: data})
      })
    }
    if(history.location.pathname==='/contains'){//} && match.params.endpoint && match.params.tag){

      fetch('http://127.0.0.1:8000/contains/'+history.location.search)
      .then(results => {
        return results.json()
      })
      .then(data => {
        this.setState({contains: data})

      })
    }

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cobalt.io</h1>
          {this.state.results}
        </header>
        <Switch>
          <Route exact path='/parse' 
          render={(routeProps) => (
            <Parse {...routeProps} {...this.state} />
          )}
          />
          <Route exact path='/contains' 
          render={(routeProps) => (
            <Contains {...routeProps} {...this.state} />
          )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
