import { Button, Form, Input, message } from "antd";
import axios from "axios";
import React from "react";

const CreateClientPage = () => {
  const onFinish = (values) => {
    axios
      .post("http://localhost:4000/users", values)
      .then((response) => {
        console.log("Client created:", response.data);
        message.success("Client created successfully!");
      })
      .catch((error) => {
        console.error("Error creating client:", error);
        message.error("Failed to create client. Please try again.");
      });
  };
  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <h1>Создать клиента</h1>
      <Form
        name="createClientForm"
        onFinish={onFinish}
        initialValues={{
          blackList: false, // Setting default value for blackList field
        }}
      >
        <Form.Item
          label="ФИО"
          name="username"
          rules={[{ required: true, message: "Please input username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Номер телефона"
          name="phoneNumber"
          rules={[{ required: true, message: "Please input phone number!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Диагноз"
          name="problem"
          rules={[{ required: true, message: "Please input problem!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Сумма денег"
          name="money"
          rules={[{ required: true, message: "Please input money!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Описание"
          name="description"
          rules={[{ required: true, message: "Please input description!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateClientPage;
