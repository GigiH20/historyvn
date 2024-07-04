import React, { useState, useEffect } from "react";
import "./index.css";
import { Divider, Button } from "antd";
import { useParams } from "react-router-dom";

interface Props {}

const LessContent: React.FC<Props> = () => {
    const {id, lid} = useParams();
  return (
    <div className="lesson-section-wrapper">
      <div className="title-lesson-section">
        <span>Tổng quan thời kỳ Hồng Bàng & Văn Lang</span>
      </div>
      <Divider />
      <img src="../nuocvanlang.png" width="1500px" height="900px" />
      <div className="lesson-section-content">
        <span>
          Lịch sử Việt Nam thời kỳ Hồng Bàng, từ Kinh Dương Vương được phong năm
          Nhâm Tuất, cùng thời với Đế Nghi, truyền đến cuối thời vua Hùng Vương,
          ngang với đời Noãn Vương nhà Chu năm thứ 57 [258 TCN] là năm Quý Mão
          thì hết, tất cả 2.622 năm [2879 – 258 TCN]. Thời kỳ Hồng Bàng theo
          truyền thuyết và dã sử cho rằng bắt đầu từ năm 2879 TCN, là niên đại
          của Kinh Dương Vương, với quốc hiệu Xích Quỷ. Lãnh thổ của quốc gia
          dưới thời Kinh Dương vương rộng lớn, phía bắc tới sông Dương Tử (cả
          vùng hồ Động Đình), phía nam tới nước Hồ Tôn (Chiêm Thành), phía đông
          là Đông Hải (một phần của Thái Bình Dương), phía tây là Ba Thục (Tứ
          Xuyên, Trung Hoa ngày nay). Về sau người Việt chỉ thấy có ở miền Bắc
          Việt Nam ngày nay, có thể một phần do sự lấn áp của các tộc người Hoa
          Hạ từ phương Bắc.
        </span>
      </div>
      <Divider/>
      <div className="lesson-section-button">
        <Button>Hoàn thành bài học</Button>
      </div>
    </div>
  );
};

export default LessContent;
