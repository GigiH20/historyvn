import { Button, Divider, Space } from "antd";
import React from "react";
import { ICourse } from "../../type/ICourse";

interface Props {
    data: ICourse[];
}

const HistoryPhase: React.FC<Props> = (props) => {
    let {data} = props;
    return (
        <div className="phase-wrapper">
          <div className="title">
            <h3>Các thời kỳ lịch sử</h3>
          </div>
          {/* <Divider/> */}
          <Space className="phase-list" direction="vertical" size="large">
            {data.map((item, index) => (
              <Button key={index} className="phase-item" onClick={() => console.log('[check index]', index)}>
                    <span>{item.title}</span>
              </Button>
            ))}
          </Space>
        </div>
      );
    };
    
export default HistoryPhase