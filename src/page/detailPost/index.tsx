import React from "react";
import {
  LikeTwoTone,
  DislikeTwoTone,
  CommentOutlined,
  DeleteFilled,
  EditOutlined,
} from "@ant-design/icons";
import "./index.css";
import { Space, Divider } from "antd";
import Comment from "./commentSection";

const DetailPost = () => {
  return (
    <div className="detail-post-wrapper">
      <div className="detail-post-info">
        <div className="detail-post-title">
          <span>Chuyện về vị vua khiến nhà Mạc thất thủ</span>
        </div>
        <div className="detail-post-time">
          <span>Tháng 02, 05, 2024, 9:27 PM</span>
        </div>
      </div>
      <div className="detail-post-content">
        <span>
          Nhà Mạc bắt đầu khi Mạc Đăng Dung, sau khi dẹp được các bè phái triều
          đình đã ép vua Lê Cung Hoàng nhà Hậu Lê nhường ngôi vào tháng 6 năm
          1527. Mạc triều chấm dứt khi vua Mạc Mậu Hợp lập con trai là Mạc Toàn
          lên ngôi, bị quân đội Lê - Trịnh do Trịnh Tùng chỉ huy đánh bại vào
          cuối năm 1592. Mạc Toàn lên ngôi nhưng tại vị chỉ được 2 tháng, tổng
          cộng thời gian tồn tại chính thức của triều đại là gần 66 năm đứng
          chân nơi đất Thăng Long, sau bại trận phải lui về Cao Bằng. Bởi vậy,
          Mạc Mậu Hợp được xem là vị vua cuối cùng của Mạc triều. Trị vì tới 30
          năm (1562 – 1592), thời kì đầu Mạc Mậu Hợp được Khiêm vương Mạc Kính
          Điển nhiếp chính, duy trì thế đối trọng với họ Trịnh đang phò nhà Lê ở
          phía Nam. Nhưng sau khi Khiêm vương mất, nhà Mạc dần suy yếu, và thời
          kì của ông chứng kiến sự suy vong trực tiếp của triều đại. Mạc Mậu Hợp
          có nguyên quán là người xã Cao Đôi, huyện Bình Hà (nay là thôn Long
          Động, xã Nam Tân, huyện Nam Sách, tỉnh Hải Dương). Ông sinh năm 1560,
          là con trưởng của Mạc Tuyên Tông. Từ khi lên ngôi vua, ít nhất hai lần
          liền Mạc Mậu Hợp bị tai ách hiếm thấy đến nỗi suýt lụy thân, như trong
          “Lịch triều hiến chương loại chí” có tóm lược: “Năm Sùng Khánh thứ 13
          (1578), sét đánh vào cung, ông thành ra bán thân bất toại, mới đổi
          niên hiệu. Sau lại bị thong manh mắt mờ, chữa mấy năm mới khỏi”. Việc
          này làm nhớ tới trường hợp chúa Trịnh Giang cũng bị sét đánh mà phải ở
          cung Thưởng Trì rồi trao ngôi chúa cho em. Sự thể việc tai ương, ác
          bệnh liên tiếp kéo đến với Mạc Mậu Hợp, trong sử cũ ghi lại rất cụ
          thể. Ấy là việc của năm Mậu Dần (1578), được “Đại Việt sử ký toàn thư”
          chép: “Tháng 2, ngày 21, Mạc Mậu Hợp bị sét đánh ở trong cung, bị bại
          liệt nửa mình, sau chữa thuốc lại khỏi, bèn đổi niên hiệu, lấy năm ấy
          làm năm Diên Khánh thứ 1”. Vài năm sau, nhằm năm Tân Tỵ (1581), tai
          ương qua thì bệnh tật lại tới. Vua Mạc Mậu Hợp mắc căn bệnh ở mắt.
          “Đại Việt thông sử” cho hay: “Năm ấy, Mậu Hợp bị chứng “thong manh”,
          mắt mờ không trông rõ, y sai mời các thầy thuốc giỏi trong thiên hạ
          tới chữa, trong vài năm, con mắt lại được bình phục như thường”. Đoạt
          vợ bề tôi?
        </span>
      </div>
      <div className="detail-post-react">
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
      <Divider orientation="left" style={{ borderColor: '#FFC0CB',height: '4px', fontFamily: 'Lato'}}>Bình luận</Divider>
        <div className="detail-post-comment">
            <Comment/>
        </div>
    </div>
  );
};

export default DetailPost;
