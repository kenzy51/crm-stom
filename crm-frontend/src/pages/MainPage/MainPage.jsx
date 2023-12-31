import React, { useState, useEffect } from "react";
import { Input, Table } from "antd";
import axios from "axios";
import { baseUrl } from "../../config";
const MainPage = () => {
  const [data, setData] = useState([]);
  const [searchUsername, setSearchUsername] = useState("");

  useEffect(() => {
    axios
      .get(`${baseUrl}/users`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchUsername(value);
  };

  const filteredData = data.filter((item) =>
    item.username.toLowerCase().includes(searchUsername.toLowerCase())
  );

  const columns = [
    {
      title: "ФИО",
      dataIndex: "username",
      key: "username",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search username"
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{ width: 200, marginBottom: 8, display: "block" }}
          />
        </div>
      ),
      filterIcon: () => null,
      onFilter: (value, record) =>
        record.username.toLowerCase().includes(value.toLowerCase()),
      render: (text) => <div>{text}</div>, 
    },

    {
      title: "Номер телефона",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Диагноз",
      dataIndex: "problem",
      key: "problem",
    },
    {
      title: "Сумма за лечение",
      dataIndex: "money",
      key: "money",
    },
    {
      title: "Описание",
      dataIndex: "description",
      key: "description",
    },
  ];

  return (
    <div>
      <h1>Таблица клиентов</h1>
      <Input
        placeholder="Введите имя"
        value={searchUsername}
        onChange={handleSearch}
        style={{ width: 200, marginBottom: 16 }}
      />
      <Table
        dataSource={filteredData}
        columns={columns}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default MainPage;
