import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './Editor';

var files = [
    {name: "Main.java", url: "#"},
    {name: "A.java", url: "#", selected: true},
    {name: "B.java", url: "#"},
    {name: "C.java", url: "#"}
];

var content = "public class A {\n\
    public static void main(String args[]) {\n\
        System.out.println();\n\
    }\n\
}";

ReactDOM.render(
    <Editor files={files} text={content}/>,
    document.getElementById('editor')
);