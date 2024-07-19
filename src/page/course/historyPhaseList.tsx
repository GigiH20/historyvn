import React from "react";
import { Button, Space } from "antd";
import { ICourse } from "../../type/ICourse";

interface Props {
  data: ICourse[];
  onCategoryClick: (category: string) => void;
}

const HistoryPhase: React.FC<Props> = (props) => {
  const { onCategoryClick } = props;

  return (
    <div className="phase-wrapper">
      <div className="title">
        <h3>Các thời kỳ lịch sử</h3>
      </div>
      <Space className="phase-list" direction="vertical" size="large">
        <Button 
          className="phase-item" 
          onClick={() => onCategoryClick("Hồng Bàng & Văn Lang")}
        >
          <span>Hồng Bàng & Văn Lang</span>
        </Button>
        <Button 
          className="phase-item" 
          onClick={() => onCategoryClick("Trịnh Nguyễn phân tranh")}
        >
          <span>Trịnh Nguyễn phân tranh</span>
        </Button>
        <Button 
          className="phase-item" 
          onClick={() => onCategoryClick("Thời kỳ bắc thuộc lần thứ 1")}
        >
          <span>Thời kỳ bắc thuộc lần thứ 1</span>
        </Button>
      </Space>
    </div>
  );
};

export default HistoryPhase;
