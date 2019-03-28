import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

class Resources extends Component {
    render() {
        // this doesn't render in a very pleasing way yet
        // but that's not as important so I'm moving on
        return (
            <div className="container col">
                <img src="/RESOURCES.png" alt="Resources" />
                {/* <div className="col"> */}
                    {this.props.links.map(r => (
                        <a key={r._id} href={r.url}>
                            <span>{r.title}</span>
                            {/* <img src="/RESOURCE_BUTTON.png" /> */}
                        </a>
                    ))}
                {/* </div> */}
            </div>
        );
    }
}

export default ResourcesContainer = withTracker(() => {
    return {
        links: Links.find().fetch(),
    };
})(Resources);