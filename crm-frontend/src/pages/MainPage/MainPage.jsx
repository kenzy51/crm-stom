import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const MainPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns = [
    {
      title: 'ФИО',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Номер телефона',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Диагноз',
      dataIndex: 'problem',
      key: 'problem',
    },
    {
      title: 'Сумма за лечение',
      dataIndex: 'money',
      key: 'money',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (
    <div>
      <h1>Таблица клиентов</h1>
      <Table dataSource={data} columns={columns} scroll={{ x: 'max-content' }} />
    </div>
  );
};

export default MainPage;
