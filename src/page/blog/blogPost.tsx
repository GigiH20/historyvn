import React from "react";
import { LikeTwoTone, DislikeTwoTone, CommentOutlined, DeleteFilled, EditOutlined } from "@ant-design/icons";
import { Button, Space, Modal, FormInstance } from "antd";
import FormCreate from "./formCretePost";
import { useNavigate } from "react-router-dom";

interface BlogPostProps { 
  openModal?: () => void,
}
const BlogPost: React.FC<BlogPostProps> = ({openModal}) => {
  const navigate = useNavigate();

  return (
    <div className="blog-tab">
      <div className="blog-tab-title">
        <span className="span-title">Bài viết nổi bật</span>
        <Button icon = {<EditOutlined />} type="text" size="large" onClick={openModal}></Button>
      </div>
      <div className="blog-post" onClick={() => navigate('/blog/detail')} >
        <div className="info-blog-post">
          <span className="span-title-post">
            Chuyện về vị vua khiến nhà Mạc thất thủ
          </span>
          <span className="span-time">Tháng 02, 28, 2024</span>
        </div>
        <div className="content-blog-post">
          <span className="span-content">
            Mạc Toàn lên ngôi nhưng tại vị chỉ được 2 tháng, tổng cộng thời gian
            tồn tại chính thức của triều đại là gần 66 năm đứng chân nơi đất
            Thăng Long, sau bại trận phải lui về Cao Bằng. Bởi vậy, Mạc Mậu Hợp
            được xem là vị vua cuối cùng của Mạc triều. Một trong những sự kiện
            tồn nghi rất lớn đối với Mạc Mậu Hợp là việc bị đánh giá “buông
            tuồng du đãng, tửu sắc bừa bãi”, mưu cướp vợ bề tôi. Lịch sử ghi
            nhận tướng Bùi Văn Khuê bỏ Mạc phò Lê (1592), nhưng sau đó vị tướng
            này lại bỏ Lê về Mạc (1600). Đó có thể là một kế hoạch trong chiến
            lược quân sự của nhà Mạc mà ngày nay, khó có thể giải thích rõ ràng.
          </span>
        </div>
        <Space className="react-blog-post" size='middle'>
          <Space className="like-post">
            <span className="like-count">5</span>
          <LikeTwoTone style={{ fontSize: '20px'}}/>
          </Space>
          <Space className="dislike-post">
            <span className="dislike-count" >5</span>
          <DislikeTwoTone style={{ fontSize: '20px'}}/>
          </Space>
          <Space className="comment-post">
            <span className="comment-count">5</span>
          <CommentOutlined style={{fontSize: '20px'}}/>
          </Space>
          <Space className="delete-post">
          <span className="comment-count">5</span>
          <DeleteFilled style={{fontSize: '20px', color: "red"}} />
          </Space>
        </Space>
      </div>

    </div>
  );
};

export default BlogPost;
