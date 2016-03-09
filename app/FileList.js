import React from 'react';
import File from './File';

export default class FileList extends React.Component {
    render() {
        var files = this.props.files;
        return (
            <div className="list-group">
                {files.map(file => <File name={file.name} url={file.url} selected={file.selected} key={file.name}/>)}
            </div>
        );
    }
}