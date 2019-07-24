import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/header-component/header.component";
import Home from "./components/home-component/home.component";
import Credits from "./components/credits-component/credits.component";
import Bio from "./components/bio-component/bio.component";
import Photo from "./components/photo-component/photo.component";
import Contact from "./components/contact-component/contact.component";
import Footer from "./components/footer-component/footer.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <section className='main' role='main'>
            <Route path="/" exact component={Home} />
            <Route path="/Bio" component={Bio} />
            <Route path="/Photo" component={Photo} />
            <Route path="/Credits" component={Credits} />
            <Route path="/Contact" component={Contact} />
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
