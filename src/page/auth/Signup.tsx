import { useSignupMutation } from "@/api/auth";
import React from "react";
import { Button, Form, Input } from "antd";
import { IProduct } from "@/interface/product";

const Signup = () => {
  const [signup] = useSignupMutation();
  const onFinish = async (values: any) => {
    await signup({
      name: values.name,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    });
  };
  type FieldType = {
    name?: string;
    password?: string;
    confirmPassword?: string;
    email?: string;
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Nhap name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Nhap email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Nhap password" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item<FieldType>
          label="ConfirmPassword"
          name="confirmPassword"
          rules={[{ required: true, message: "Nhap confirmPassword" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
