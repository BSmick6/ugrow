import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

class Resources extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.links);
    }

    render() {
        return (
            <div className="container col">
                <img src="/RESOURCES.png" alt="Resources" />
                <div>
                    {this.props.links.map(r => (
                        <a key={r.id} href={r.url}>
                            <img src="/RESOURCE_BUTTON.png" />
                            {/* the centered class still needs to be created */}
                            <span className="centered">{r.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        );
    }
}

export default ResourcesContainer = withTracker(() => {
    return {
        links: Links.find().fetch(),
    };
})(Resources);