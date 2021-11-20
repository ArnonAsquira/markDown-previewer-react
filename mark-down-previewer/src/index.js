import './css/main.css';
import React from 'react';
import ReactDOM from 'react-dom'
import PrePreviewField from './components/raw-markDown-text-component';
import PostPreviewField from './components/post-preview-field';
import { marked } from 'marked';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rawText: ''
        }
    }

    getRawText(e) {
        this.setState ({
            rawText: marked.parse(e.target.value)
        })
    }

    outPutMarkedText(text) {
       return text;
    }

    render() {
        return (
            <main>
               < PrePreviewField onKeyUp={(e) => this.getRawText(e)}/>
               < PostPreviewField postText={this.outPutMarkedText(this.state.rawText) }/>
            </main>
        )
    }
} 

ReactDOM.render(< Main />, document.getElementById('root'));