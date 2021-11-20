import React from "react";

export default class PrePreviewField extends React.Component {
    
    render() {
        return(
           <div className="pre-preview-main-div">
              <textarea onKeyUp={(e) => this.props.onKeyUp(e)}> 

              </textarea>
           </div>
        )
    }

}