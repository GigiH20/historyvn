import React from "react";
import {
  LikeTwoTone,
  DislikeTwoTone,
  CommentOutlined,
  DeleteFilled,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";
interface BlogPostProps {
  openModal?: () => void;
}
const BlogQuestion: React.FC<BlogPostProps> = ({ openModal }) => {
  return (
    <div className="blog-tab">
      <div className="blog-tab-title">
        <span className="span-title">Câu hỏi nổi bật</span>
        <Button
          icon={<EditOutlined />}
          type="text"
          size="large"
          onClick={openModal}
        ></Button>
      </div>
      <div className="blog-post">
        <div className="info-blog-post">
          <span className="span-title-post">
            Có đúng hay không khi cho rằng : “Cách mạng tháng Tám năm 1945 ở
            Việt Nam thành công một phần là nhờ quyết định của hội nghị Ianta
            (2-1945)” ?{" "}
          </span>
          <span className="span-time">Tháng 02, 28, 2024</span>
        </div>
        <div className="content-blog-post">
          <span className="span-content">
            Tại hội nghị Ianta 3 cường quốc Mĩ, Anh, Liên Xô đã thống nhất cùng
            nhau tiêu diệt chủ nghĩa phát xít Đức và quân phiệt Nhật Bản- kẻ thù
            chính của nhân dân Việt Nam. Từ đó tạo ra điều kiện khách quan thuận
            lợi để nhân dân Việt Nam đứng lên giành chính quyền thắng lợi nhanh
            chóng (trong 15 ngày) và ít đổ máu.{" "}
          </span>
        </div>
        <Space className="react-blog-post" size="middle">
          <Space className="like-post">
            <span className="like-count">5</span>
            <LikeTwoTone style={{ fontSize: "20px" }} />
          </Space>
          <Space className="dislike-post">
            <span className="dislike-count">5</span>
            <DislikeTwoTone style={{ fontSize: "20px" }} />
          </Space>
          <Space className="comment-post">
            <span className="comment-count">5</span>
            <CommentOutlined style={{ fontSize: "20px" }} />
          </Space>
          <Space className="delete-post">
            <span className="comment-count">5</span>
            <DeleteFilled style={{ fontSize: "20px", color: "red" }} />
          </Space>
        </Space>
      </div>
    </div>
  );
};

export default BlogQuestion;
