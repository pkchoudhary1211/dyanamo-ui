import { Table, Tag, Space, Layout, Input } from "antd";
import { Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Row, Col, Divider } from "antd";

import { useEffect, useState } from "react";
import { getUsers } from "../../Users/";
import { userColumns } from "../../../utils/Schama";
import { AudioOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  //loading user data
  useEffect(async () => {
    const user = await getUsers({});
    setUsers(user);
  }, []);

  //on search
  useEffect(async () => {
    if (searchTxt.trim() != "") {
      const user = await getUsers({ email: searchTxt });
      setUsers(user);
    } else {
      const user = await getUsers({});
      setUsers(user);
    }
  }, [searchTxt]);

  return (
    <div className="main-div">
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>User</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  icon={<NotificationOutlined />}
                  title="subnav 3"
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <h1> User list</h1>
              <Row>
                <Col lg={6} sm={12}>
                  <Search
                    placeholder="Email Id"
                    onSearch={(value) => {
                      setSearchTxt(value);
                    }}
                    enterButton
                  />
                </Col>
              </Row>
              <Table
                columns={userColumns}
                dataSource={users}
                style={{ marginTop: "10px" }}
              />
            </Content>
          </Layout>
        </Content>
      </Layout>
      ,
    </div>
  );
};

export default Users;
