
/*
  src/App/views/pages/Home/Home.js
*/

// import react component lib
import React, { Component } from 'react';

// import evergreen-ui component libs
import { Heading, majorScale, Pane, Button } from 'evergreen-ui';

// import react-router-dom component libs
import { Link } from 'react-router-dom';

// import jumbo component
import Jumbo from "../../components/Jumbo";
// import navbar component
import NavBar from "../../components/NavBar";
// import footer component
import Footer from '../../components/Footer';


// Home page component class
class Home extends Component {
  render() {
    return (
      <div className="Home">

        <Jumbo />
        <NavBar name="Home" />

        <Heading
          size={700}
          marginTop={majorScale(2)}
          marginBottom={majorScale(2)}
        >
          M8s Home Page
        </Heading>
        <hr className="my-2" />

        <Pane>
          <Link to='/login'>
            <Button
              appearance="primary"
              intent="success"
              marginTop={majorScale(4)}
              height={40}
            >
              Login
            </Button>
          </Link>
        </Pane>
        <Pane>
          <Link to='/register'>
            <Button
              appearance="primary"
              intent="none"
              marginTop={majorScale(4)}
              height={50}
            >
              Register
            </Button>
          </Link>
        </Pane>

        <Footer />

      </div>
    );
  }
}

export default Home;
