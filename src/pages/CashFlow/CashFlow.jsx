import React from "react";
import styles from "./CashFlowStyles.module.scss";
import { Card, Col, Row, Select, Table } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { dataGraph, options } from "../../config/graph";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler
);

const columns = [
  {
    dataIndex: "title",
  },
  {
    dataIndex: "value",
  },
];

const data = [
  {
    key: "1",
    title: "Today’s balance",
    value: "1,030,00",
  },
  {
    key: "2",
    title: () => {
      return (
        <div>
          <Select
            defaultValue="Next 30 Days"
            options={[{ value: "Next 30 Days", label: "Next 30 Days" }]}
          />
        </div>
      );
    },
    value: "1,500,00",
  },
  {
    key: "3",
    title: "Bills to pay",
    value: "-2,890.99",
  },
];

const CashFlow = () => {
  return (
    <div className={`cashFlow ${styles.cashFlow}`}>
      <h1 className={styles.title}>Cash Flow</h1>
      <div className={styles.baseArea}>
        <div className={styles.headerDashboard}>
          <div className={`titleAreaCashFlow ${styles.titleArea}`}>
            <h2>Projected balance from invoices and bills</h2>
          </div>
          <div className={styles.selectArea}>
            <Select
              defaultValue="Business Bank Account"
              style={{ width: 212, border: "1px solid #DCDCDC" }}
              options={[
                {
                  value: "Business Bank Account",
                  label: "Business Bank Account",
                },
              ]}
            />
            <Select
              defaultValue="Next 30 Days"
              style={{ width: 141, border: "1px solid #DCDCDC" }}
              options={[{ value: "Next 30 Days", label: "Next 30 Days" }]}
            />
          </div>
        </div>
        <div className={styles.chartArea}>
          <div className={`summaryCashFlow ${styles.summary}`}>
            <h5> 30 days summary</h5>
            <Table
              className={styles.table}
              dataSource={data}
              columns={columns}
              pagination={false}
            />
            <div className={styles.balanceArea}>
              <span className={styles.balanceLeft}>
                <div className={styles.title}> Projected Balance</div>
                <div className={styles.date}>in March 2</div>
              </span>
              <span className={styles.valueArea}>434.00</span>
            </div>
          </div>
          <div className={styles.graphArea}>
            <Line options={options} width={675} height={275} data={dataGraph} />
          </div>
        </div>
      </div>
      <Row gutter={16}>
        <Col span={8}>
          <Card bordered={false} className={styles.cardArea}>
            <div className={`titleAreaCashFlow ${styles.titleArea}`}>
              <span className={styles.title}>
                <div> Invoices owned to you</div>
                <Select
                  defaultValue="Group by date"
                  options={[
                    {
                      value: "Group by date",
                      label: "Group by date",
                    },
                  ]}
                />
              </span>
              <span className={styles.amount}>2,190.99</span>
            </div>
            <div className={`contentCashFlow ${styles.contentArea}`}>
              <Select
                defaultValue="Within a week 1"
                options={[
                  {
                    value: "Within a week 1",
                    label: "Within a week 1",
                  },
                ]}
              />
              <div className={styles.amount}> 209.09</div>
            </div>
            <div className={`contentCashFlow ${styles.contentArea}`}>
              <Select
                defaultValue="Within 2 weeks 2"
                options={[
                  {
                    value: "Within 2 weeks 2",
                    label: "Within 2 weeks 2",
                  },
                ]}
              />
              <div className={styles.amount}> 1602.00</div>
            </div>
            <div className={`contentCashFlow ${styles.contentArea}`}>
              <Select
                defaultValue="More than 2 week 1"
                options={[
                  {
                    value: "More than 2 week 1",
                    label: "More than 2 week 1",
                  },
                ]}
              />
              <div className={styles.amount}>232.00</div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} className={styles.cardArea}>
            <div className={`titleAreaCashFlow ${styles.titleArea}`}>
              <span className={styles.title}>
                <div> Invoices owned to you</div>
                <Select
                  defaultValue="Group by date"
                  options={[
                    {
                      value: "Group by date",
                      label: "Group by date",
                    },
                  ]}
                />
              </span>
              <span className={styles.amount}>3,010.99</span>
            </div>
            <div className={styles.contentArea}>
              <Select
                defaultValue="Within a week 2"
                options={[
                  {
                    value: "Within a week 2",
                    label: "Within a week 2",
                  },
                ]}
              />
              <div className={styles.amount}> 409.09</div>
            </div>
            <div className={styles.contentArea}>
              <Select
                defaultValue="More than 2 week 1"
                options={[
                  {
                    value: "More than 2 week 1",
                    label: "More than 2 week 1",
                  },
                ]}
              />
              <div className={styles.amount}> 232.00</div>
            </div>
            <div className={styles.contentArea}>
              <Select
                defaultValue="Within 2 weeks 4"
                options={[
                  {
                    value: "Within 2 weeks 4",
                    label: "Within 2 weeks 4",
                  },
                ]}
              />
              <div className={styles.amount}>1602.00</div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} className={styles.cardArea}>
            <div className={`titleAreaCashFlow ${styles.titleArea}`}>
              <span className={styles.title}>Suggested Action</span>
            </div>
            <div className={styles.content}>
              Add dates for overdue invoices 4 invoices for Marin BC and 2 other
              contacts.
              <div className={styles.subContent}>
                <span className={styles.amount}>2190.99</span>
                <span className={styles.textArea}>Add expected dates</span>
              </div>
            </div>
            <div className={styles.content}>
              Add dates for overdue invoices 4 invoices for Marin BC and 2 other
              contacts.
              <div className={styles.subContent}>
                <span className={styles.amount}>2190.99</span>
                <span className={styles.textArea}>Add expected dates</span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CashFlow;
