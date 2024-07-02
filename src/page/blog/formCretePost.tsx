import React from "react";
import { Form, Input, FormInstance } from "antd";
import EditorFormItem from "./editor";

interface FormCreate {
  form: FormInstance<any>;
}

const FormCreate: React.FC<FormCreate> = (props) => {
  const { form } = props;
  return (
    <Form layout="horizontal" form={form} name="form">
      <Form.Item
        name="title"
        label="Tiêu đề"
        rules={[
          {
            required: true,
            message: "Please input your title",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="keyword"
        label="Từ khóa"
        rules={[
          {
            required: true,
            message: "Please input your keyword",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="content"
        label="Nội dung"
        rules={[
          {
            required: true,
            message: "Pease input your content",
          },
        ]}
      >
        <EditorFormItem />
      </Form.Item>
    </Form>
  );
};

export default FormCreate;
