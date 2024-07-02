import React from "react";
import { Input, Button, Space, Col, Row } from "antd";
import PostCard from "./comp/postCard";
import { useNavigate } from "react-router-dom";

const { Search } = Input;
const Post = (props: any) => {
  const navigate = useNavigate()
  return (
    <div className="post-home-wrapper">
      <div className="title">
        <h1>Bài viết nổi bật</h1>
      </div>
      <div className="description-post">
        <span>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </span>
        <Button type="primary" onClick={() => navigate('/blog')}>Xem tất cả</Button>
      </div>
      <div className="post-element">
        <div className="post-col-1">
          <PostCard />
          <PostCard />
        </div>
        <div className="post-col-1">
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
};
export default Post;
