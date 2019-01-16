import React, { Component } from 'react';
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
          <MenuItem><img src="/ABOUT.png" alt="About" /></MenuItem>
          <MenuItem><img src="/HOW_IT_WORKS.png" alt="How It Works" /></MenuItem>
          <MenuItem><img src="/PRIVACY.png" alt="Privacy" /></MenuItem>
          <MenuItem><img src="/RESOURCES.png" alt="Resources" /></MenuItem>
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