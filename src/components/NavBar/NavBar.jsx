import React, { useState } from "react";
import "./styles.scss";
import { MenuOutlined, CaretDownOutlined } from "@ant-design/icons";
import { ReactComponent as Overview } from "../../assets/images/ic_dashboard.svg";
import { ReactComponent as Business } from "../../assets/images/ic_store.svg";
import { ReactComponent as Sales } from "../../assets/images/paid-24px.svg";
import { ReactComponent as Transactions } from "../../assets/images/ic_payment.svg";
import { ReactComponent as Expenses } from "../../assets/images/summarize-24px.svg";
import { ReactComponent as Reports } from "../../assets/images/ic_insert_chart.svg";
import { ReactComponent as Projects } from "../../assets/images/ic_work.svg";
import { ReactComponent as Contacts } from "../../assets/images/ic_contacts.svg";
import { ReactComponent as Profile } from "../../assets/images/user_icon.svg";

import { Menu } from "antd";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const itemsCRM = [
  //   {
  //     key: "1",
  //     icon: <Overview className="item-logo" />,
  //     label: "Overview",
  //   },
  //   {
  //     key: "2",
  //     icon: <Companies />,
  //     label: "Companies",
  //   },
  //   {
  //     key: "3",
  //     icon: <Deals />,
  //     label: "Deals",
  //   },
  //   {
  //     key: "4",
  //     icon: <Contacts />,
  //     label: "Contacts",
  //   },
  //   {
  //     key: "5",
  //     icon: <Reports />,
  //     label: "Reports",
  //     children: [
  //       {
  //         key: "1",
  //         label: "Custom Reports",
  //       },
  //       {
  //         key: "2",
  //         label: "Leads Reports",
  //       },
  //       {
  //         key: "3",
  //         label: "Sales Reports",
  //       },
  //     ],
  //   },
  //   {
  //     key: "6",
  //     icon: <Calendar />,
  //     label: "Calendar",
  //   },
  //   {
  //     key: "7",
  //     icon: <Message />,
  //     label: "Message",
  //   },
  //   {
  //     key: "8",
  //     icon: <Documents />,
  //     label: "Documents",
  //   },
  // ];

  const itemsFintech = [
    {
      key: "1",
      icon: <Overview className="item-logo" />,
      label: <a href={`/`}> Overview </a>,
    },
    {
      key: "2",
      icon: <Business />,
      label: "Business",
      children: [
        {
          key: "123",
          label: "Business Snapshot",
        },
        {
          key: "221",
          label: <a href={`/cash-flow`}> Cash Flow </a>,
        },
      ],
    },
    {
      key: "3",
      icon: <Sales />,
      label: "Sales",
      children: [
        {
          key: "13",
          label: <a href={`/sales`}> Sales Overview</a>,
        },
        {
          key: "213",
          label: <a href={`/invoices`}> Invoices </a>,
        },
        {
          key: "323",
          label: "Quotes",
        },
      ],
    },
    {
      key: "4",
      icon: <Transactions />,
      label: "Transactions",
      children: [
        {
          key: "123",
          label: "Bills to pay",
        },
        {
          key: "234",
          label: "Purchase orders",
        },
        {
          key: "3234",
          label: "Purchase Overview",
        },
      ],
    },
    {
      key: "5",
      icon: <Expenses />,
      label: "Expenses",
    },
    {
      key: "6",
      icon: <Reports />,
      label: "Reports",
    },
    {
      key: "7",
      icon: <Projects />,
      label: "Projects",
    },
    {
      key: "8",
      icon: <Contacts />,
      label: "Contacts",
    },
  ];

  return (
    <div className="navbar-layout">
      <div className="logo-section">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <Logo />
      </div>
      <div className="profile-section">
        <span className="user">
          <Profile /> Lajou Cafe
        </span>
        <CaretDownOutlined className="arrow-dropdown" />
      </div>
      <Menu
        mode="inline"
        items={itemsFintech}
        inlineCollapsed={collapsed}
        className="slider"
      />
      <div className="nav-footer">
        <div className="title">Rhombus UI Kit</div>
        <div className="description">
          Want to get more info
          <div>
            about Rhombus? <span>Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
