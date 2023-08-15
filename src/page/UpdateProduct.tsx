import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "@/api/product";
import { IProduct } from "@/interface/product";
import { Button, Form, Input, message } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [form] = Form.useForm();
  const [messApi, contextHolder] = message.useMessage();
  const [UpdateProduct] = useUpdateProductMutation();
  const navigate = useNavigate();
  const { idProduct } = useParams();
  const { data: productData } = useGetProductByIdQuery(idProduct || "");

  useEffect(() => {
    form.setFieldsValue(productData);
  }, [productData]);

  const onFinish = (product: any) => {
    UpdateProduct({ ...product, id: idProduct })
      .unwrap()
      .then(() => {
        messApi.open({
          type: "success",
          content: "Cap nhat thanh cong doi 2s ve danh sach san pham",
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
            Cap nhat
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateProduct;
