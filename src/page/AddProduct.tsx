import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { IProduct } from "@/interface/product";
import { useAddProductMutation } from "@/api/product";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [form] = Form.useForm();
  const [messApi, contextHolder] = message.useMessage();
  const [AddProduct] = useAddProductMutation();
  const navigate = useNavigate();
  const onFinish = (product: any) => {
    AddProduct(product)
      .unwrap()
      .then(() => {
        messApi.open({
          type: "success",
          content: "Them thanh cong doi 2s ve danh sach san pham",
        });
        setTimeout(() => {
          navigate("/admin/product");
        }, 2000);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<IProduct>
          label="Ten san pham"
          name="name"
          rules={[
            { required: true, message: "Please input your name product!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IProduct>
          label="Gia san pham"
          name="price"
          rules={[
            { required: true, message: "Please input your price product!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          {contextHolder}
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
