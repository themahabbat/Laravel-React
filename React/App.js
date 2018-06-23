import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Main extends React.Component {
   render() {
      return (
         <BrowserRouter basename="/">
            <div>
               <Route exact path="/about" component={() => (
                  <span>ABOUT</span>
               )} />
               <Route exact path="/" component={() => (
                  <span>HOME</span>
               )} />
               <hr/>
               <Link to="/about">About</Link><br/>
               <Link to="/">Home</Link>
            </div>
         </BrowserRouter>
      )
   }
}

ReactDOM.render(<Main />, document.querySelector('#app'))
