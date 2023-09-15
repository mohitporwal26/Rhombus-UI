import React from "react";
import InputField from "../Input/Input";
import {
  SearchOutlined,
  PlusOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { Layout } from "antd";
import Button from "../Button/Button";
import "./styles.scss";
import { ReactComponent as Notification } from "../../assets/images/Notification.svg";
import { ReactComponent as UserIcon } from "../../assets/images/ic_user.svg";

const { Header } = Layout;

const HeaderSection = () => {
  return (
    <Header className="header">
      <InputField
        placeholder="Search.."
        type="text"
        bordered={false}
        prefix={<SearchOutlined />}
      ></InputField>
      <div className="right-section">
        <Button className="add-button" label="Add" icon={<PlusOutlined />} />
        <QuestionCircleFilled className="help-button" />
        <Notification />
        <span className="user-section">
          <UserIcon />
        </span>
        <span className="name-section">
          <div>Katie Pina</div>
          <div className="designation">Admin</div>
        </span>
      </div>
    </Header>
  );
};

export default HeaderSection;
