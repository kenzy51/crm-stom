import { Button, Form, Input, message } from "antd";
import axios from "axios";
import React from "react";
import {baseUrl} from "../../config";

const CreateClientPage = () => {
  const onFinish = (values) => {
    axios
      .post(`${baseUrl}/users`, values)
      .then((response) => {
        message.success("Клиент создан!");
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
        <Form.Item label="ФИО" name="username">
          <Input />
        </Form.Item>
        <Form.Item
          label="Номер телефона"
          name="phoneNumber"
          initialValue={"+996"}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Диагноз" name="problem">
          <Input />
        </Form.Item>
        <Form.Item label="Сумма денег" name="money">
          <Input placeholder="30.000 сом или 300 usd" />
        </Form.Item>
        <Form.Item label="Описание" name="description">
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
