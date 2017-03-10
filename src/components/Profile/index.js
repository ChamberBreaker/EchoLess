import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from '../../utils/AuthService'
import { Link } from 'react-router'

export class Profile extends React.Component {
  render() {
    const { auth } = this.props
    return (
      <div>
        <h2>Profile</h2>
        <ButtonToolbar>
          <Link to="/signin"><Button bsStyle="primary" onClick={auth.logout.bind(this)}>Sign Out</Button></Link>
        </ButtonToolbar>
      </div>
    )
  }
}

Profile.propTypes = {
  location: T.object,
  auth: T.instanceOf(AuthService)
}

export default Profile;
