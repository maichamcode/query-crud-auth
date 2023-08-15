import { useSigninMutation } from "@/api/auth";
import { Button, Input } from "antd";
import React from "react";
import { Form } from "antd";

type Props = {};

const Signin = (props: Props) => {
  const [signin] = useSigninMutation();
  const onFinish = async (values: any) => {
    await signin({
      email: values.email,
      password: values.password,
    });
  };
  type FieldType = {
    password?: string;

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
          <Input />
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

export default Signin;
