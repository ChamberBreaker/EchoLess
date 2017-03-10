import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './components/PageLayout.css';

export default class App extends React.Component {
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }

    return (
      <div className="root">
        <Hero />
        <Nav />
        {children}
        <Footer />
      </div>
  )}
}
