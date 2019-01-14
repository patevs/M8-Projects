
/*
  src/components/Navigation/index.js
*/

// imports
import React from 'react';

// react-router-dom component libs
import { Link } from 'react-router-dom';

// evergreen-ui component libs
import { Pane, majorScale, Strong } from 'evergreen-ui';

// reactstrap component libs
import { Container, Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

// Navigation component object
const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    {authUser.roles.includes(ROLES.ADMIN) && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )}
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <Container>

    <Row>
      <Col xs={{ size: 12 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
        <Pane
          marginLeft={majorScale(-2)}
          marginRight={majorScale(-2)}
          marginBottom={majorScale(-2)}
        >
          <Breadcrumb>
            <BreadcrumbItem active>
              <Strong marginLeft={majorScale(1)}>
                <Link to={ROUTES.LANDING}>M8S HOME</Link>
              </Strong>
            </BreadcrumbItem>
          </Breadcrumb>
        </Pane>
      </Col>
    </Row>
  
  </Container>
);

export default Navigation;


/*
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
*/