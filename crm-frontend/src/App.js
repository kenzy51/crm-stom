import React from "react";
import { Layout, Menu } from "antd";
import { AppRouter } from "./providers/router/AppRouter";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" onClick={() => navigate("/")}>
              Клиенты
            </Menu.Item>
            <Menu.Item key="2" onClick={() => navigate("/createClient")}>
              Создать клиента
            </Menu.Item>
          </Menu>
        </Header>
        <>
          <AppRouter />
        </>
    </div>
  );
}

export default App;
