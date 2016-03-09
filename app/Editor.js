import React from 'react';
import AceEditor from 'react-ace-wrapper';
import FileList from './FileList';

import 'brace/mode/java';
import 'brace/theme/tomorrow';
 

export default class Editor extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-2">
                    <FileList 
                        files={this.props.files}
                    />
                </div>
                <div className="col-sm-10">
                    <AceEditor
                        name="ace-editor"
                        mode="java"
                        theme="tomorrow"
                        height="100%"
                        width="100%"
                        value={this.props.text}
                    />
                </div>
            </div>
        );
    }
}
