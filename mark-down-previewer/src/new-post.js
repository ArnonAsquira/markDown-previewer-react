import './css/main.css';
import React from 'react';
import PrePreviewField from './components/globalComponenets/raw-markDown-text-component';
import PostPreviewField from './components/globalComponenets/post-preview-field';
import { Header } from './components/globalComponenets/hader';
import { marked } from 'marked';


export class Main extends React.Component {
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
                < Header />
               < PrePreviewField onKeyUp={(e) => this.getRawText(e)}/>
               < PostPreviewField postText={this.outPutMarkedText(this.state.rawText) }/>
            </main>
        )
    }
} 

// ReactDOM.render(< Main />, document.getElementById('root'));