import React from "react";
import axios from "axios";

const baseUrl = 'http://localhost:3000';

export class Header extends React.Component {
    render() {
        return(
            <div className="main-header">
                <h1>My Content World</h1>
                <ul>
                    <li id="main-page-nav"><a href={`${baseUrl}`}>home</a></li>
                    <li id="write-new-post-nav"><a href={`${baseUrl}/posts`}>write new post</a></li>
                    <li id="display-posts-nav"><a href="">display posts</a></li>
                    <li id="log-out-nav"><a href="">log out</a></li>
                </ul>
            </div>
        )
    }
}