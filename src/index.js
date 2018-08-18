import React from 'react';
import ReactDOM from 'react-dom';
import'./index.css';
import { BrowserRouter as Router , Route , Link , NavLink} from 'react-router-dom'
const Home = () => (
  <section>
  <h1>Welcome TO Our Website</h1>
  <hr/>
  <h2>This is our company website</h2>
  </section>
)
  const Abouts = () => (
    <section>
    <h1>We are a Fastest growing company</h1>
    <hr/>
    </section>
  )
  const Content = () => (
    <section>
    <h1>We are established in 1990.we have deliverse 112 projects </h1>
    <hr/>
    <h2>This is our company website</h2>
    </section>
  )
  const Links = ()=>
  (
 <div>
    <NavLink exact activeClassName="selected" to="/">Home</NavLink> { ' | '}
    <NavLink activeClassName="selected" to="/about">Abouts</NavLink>{ ' | '}
    <NavLink activeClassName="selected" to="/content">Content</NavLink>{ ' | '}
</div>
  )
  const App = () => (
    <Router>
    <div>
    <Links/>
    <Route exact path="/" component={Home}/>
      <Route path="/abouts" component={Abouts}/>
      <Route path="/content" component={Content}/>
      </div>
      </Router>
  )
ReactDOM.render(<App />, document.getElementById('root'));
