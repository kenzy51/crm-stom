import React, { useState, useEffect } from "react";
import { Button, Input, Table, Tabs, message } from "antd";
import axios from "axios";
import { baseUrl } from "../../config";
const MainPage = () => {
  const [data, setData] = useState([]);
  const [searchUsername, setSearchUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/users`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchUsername(value);
  };

  const filteredData = data
    .filter((item) =>
      item.username.toLowerCase().includes(searchUsername.toLowerCase())
    )
    .filter((item) => !item.blackList);

  const bannedData = data.filter((item) => item.blackList);
  const handleBanUser = (userId) => {
    setLoading(true);
    axios
      .put(`${baseUrl}/users/ban/${userId}`) // Use the appropriate endpoint to ban the user
      .then((response) => {
        message.success(`Клиент добавлен в черный список`);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error banning user:", error);
        message.error(`Failed to ban user`);
        setLoading(false);
      });
  };
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
    {
      title: "",
      dataIndex: "_id",
      key: "_id",
      render: (_id) => (
        <Button type="primary" onClick={() => handleBanUser(_id)} danger>
          Добавить в черный список{" "}
        </Button>
      ),
    },
  ];
  const bannedColumns = [
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

  const tabItems = [
    {
      key: "1",
      label: "Белый список",
      children: (
        <Table
          dataSource={filteredData}
          columns={columns}
          scroll={{ x: "max-content" }}
          loading={loading}
        />
      ),
    },
    {
      key: "2",
      label: "черный список",
      children: (
        <Table
          dataSource={bannedData}
          columns={bannedColumns}
          scroll={{ x: "max-content" }}
          loading={loading}
        />
      ),
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
      <Tabs items={tabItems} />
    </div>
  );
};

export default MainPage;
