import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';
// import { withTracker } from 'meteor/react-meteor-data';
// import Links from '../api/links';

export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchor: null
    };
  }

  open(e) {
    this.setState({ anchor: e.currentTarget })
  }

  close() {
    this.setState({ anchor: null })
  }

  render() {
    return (
      <div>
        <img onClick={(e) => this.open(e)} src="/dropdownmenu.png" alt="INFO MENU" />
        <Menu open={Boolean(this.state.anchor)} anchorEl={this.state.anchor} onClose={() => this.close()} >
          <MenuItem>
            <Link to="/About">
              <img src="/dropdown/ABOUT.png" alt="About" />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/HowItWorks">
              <img src="/dropdown/HOW_IT_WORKS.png" alt="How It Works" />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/Privacy">
              <img src="/dropdown/PRIVACY.png" alt="Privacy" />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/Resources">
              <img src="/dropdown/RESOURCES.png" alt="Resources" />
            </Link>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

// export default InfoContainer = withTracker(() => {
//   return {
//     links: Links.find().fetch(),
//   };
// })(Info);