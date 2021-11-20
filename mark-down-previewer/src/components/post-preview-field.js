import React from "react";

export default class PostPreviewField extends React.Component {
    
    render() {
        return(
           <div className="post-preview-main-div">
                <div dangerouslySetInnerHTML={{__html :this.props.postText}}>

                </div>
           </div>
        )
    }

}