import React from "react";
import { Button, Input } from "antd";
import './index.css'
const {TextArea} = Input
const Comment = () => { 
    let localAccount = localStorage.getItem("account") as any;
    let account = JSON.parse(localAccount);
    return ( 
        <div className="comment-wrapper">
            <div className="comment-user">
                <div className="comment-avatar-user">
                    <img src='https://play-lh.googleusercontent.com/jA5PwYqtmoFS7StajBe2EawN4C8WDdltO68JcsrvYKSuhjcTap5QMETkloXSq5soqRBqFjuTAhh28AYrA6A' style={{ borderRadius: '50px', width:'50px', height: '50px'}} />
                </div>
                <div className="comment-textarea">
                    <TextArea style={{ width: '500px'}}/>
                    <Button >Gửi bình luận</Button>
                </div>
            </div>
            <div className="comment-post-list">

            </div>
        </div>
    )
}

export default Comment