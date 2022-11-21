import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Signup from "../signup/Signup"
import { useState } from "react"

const Pages = () => {
  const [auth, setAuth] = useState(null);

  return (
    <>
      <Router>
        <Header auth={auth} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/sign' render={() => <Signup onAuth={setAuth} />} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
