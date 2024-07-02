import React from "react";
import { LikeTwoTone, DislikeTwoTone, CommentOutlined, DeleteFilled } from "@ant-design/icons";
import { Space } from "antd";

const UserPrize = () => {
  return (
    <div className="post-tab">
      <div className="post-tab-title">
        <span className="span-title">Giao dịch</span>
      </div>
      <div className="user-post">
        <Space className="content-user-post" direction="vertical">
            <span className="span-address">Địa chỉ: </span>
            <span className="span-time-transaction">Thời gian: </span>
            <span className="span-prizes">Phần thưởng cho:</span>
        </Space>
      </div>
    </div>
  );
};

export default UserPrize;
