import React from "react";
import { Layout } from "antd";
import Navbar from "../NavBar/NavBar";
import "./styles.scss";
import HeaderSection from "../Header/Header";

const { Header, Content } = Layout;

const BasicLayout = (props) => {
  return (
    <Layout className="top-layout">
      <Navbar />
      <Layout>
        <HeaderSection />
        <Content
          className="content-area"
          // style={{
          //   margin: "24px 16px",
          //   padding: 24,
          //   minHeight: 280,
          // }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default BasicLayout;
