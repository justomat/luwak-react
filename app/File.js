import React from 'react';

export default class File extends React.Component {
    render() {
        var className = "list-group-item";
        if (this.props.selected) className += " active";
        return (
            <a href={this.props.url} className={className}>
                {this.props.name}
            </a>
        );
    }
}