import React, { useState } from "react";
import SearchComp from "../../component/search";
import "./index.css";
import type { TabsProps } from "antd";
import { Divider, Tabs, Modal, Form } from "antd";
import BlogPost from "./blogPost";
import BlogQuestion from "./blogQuestion";
import FormCreate from "./formCretePost";
import FormQuestion from "./formCreateQuestion";

const Blog = () => {
  const [createModal, setCreateModal] = useState(false);
  const [questionModal, setQuestionModal] = useState(false)
  const [form] = Form.useForm();
  const [formQuestion] = Form.useForm();
  const openPostModal = () => {
    setCreateModal(true);
  };
  const closeModal = () => {
    setCreateModal(false);
  };
  const openQuestionModal = () => {
    setQuestionModal(true)
  }
  const closeQuestionModal = () => { 
    setQuestionModal(false)
  }
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Bài viết",
      children: <BlogPost openModal={openPostModal} />,
    },
    {
      key: "2",
      label: "Câu hỏi",
      children: <BlogQuestion openModal={openQuestionModal}/>,
    },
  ];

  const BlogTabs = () => {
    return (
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={items}
        tabBarStyle={{ width: "150px", border: "0" }}
        tabBarGutter={8}
      />
    );
  };
  return (
    <div className="blog-wrapper">
      <SearchComp />
      <div className="blog-section">
        <BlogTabs></BlogTabs>
      </div>
      <Modal title="Tạo bài viết mới" open={createModal} width="1000px" onCancel={closeModal}>
        <FormCreate form={form} />
      </Modal>
      <Modal title="Tạo câu hỏi mới" open={questionModal} width ="1000px" onCancel={closeQuestionModal}>
            <FormQuestion form={formQuestion}/>
      </Modal>
    </div>
  );
};

export default Blog;
