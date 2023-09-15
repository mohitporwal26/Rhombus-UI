import React from "react";
import { Card, Col, Row, Switch, Table } from "antd";
import styles from "./invoiceStyles.module.scss";
import Button from "../../components/Button/Button";
import { Pagination } from "antd";
import { FileTextFilled } from "@ant-design/icons";

const Invoices = () => {
  const columns = [
    {
      title: "Number",
      width: 100,
      dataIndex: "number",
      key: "number",
      fixed: "left",
    },
    {
      title: "Ref",
      width: 100,
      dataIndex: "ref",
      key: "ref",
      fixed: "left",
    },
    {
      title: "To",
      dataIndex: "to",
      key: "1",
      width: 150,
      render: (data) => {
        return (
          <>
            <FileTextFilled style={{ color: "#898989", padding: "4px" }} />
            {console.log(data, "data to")}
            {data}
          </>
        );
      }, // 'theImageURL' is the variable you must declare in order the render the URL
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "2",
      width: 150,
    },
    {
      title: "Due Date",
      dataIndex: "date",
      key: "4",
      width: 150,
    },
    {
      title: "Paid",
      dataIndex: "paid",
      key: "6",
      width: 150,
    },
    {
      title: "Due",
      dataIndex: "due",
      key: "7",
      width: 150,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      fixed: "right",
      width: 100,
      // render: () => <a>action</a>,
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      number: `INV-0012`,
      ref: "P/O 9711",
      to: `Myway University`,
      date: "12-04-2015",
      paid: 0.0,
      due: `${i}.00`,
      status: "Awaiting Payment",
    });
  }

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <div className={styles.invoices}>
      <div className={styles.header}>
        <div className={styles.headerName}>Invoices</div>
        <span className={styles.toggleButton}>
          <Button label="Send Statements" />
          <Button label="Export" />
          <Button label="Import" />
          <Button type="primary" label="New Import" />
        </span>
      </div>
      <div className={`contentInvoice ${styles.contentInvoice}`}>
        <Card>
          <Table
            columns={columns}
            dataSource={data}
            itemRender={itemRender}
            // scroll={{
            //   x: 1000,
            //   y: 2500,
            // }}
          />
          {/* <Pagination total={500} itemRender={itemRender} />; */}
        </Card>
      </div>
    </div>
  );
};

export default Invoices;
