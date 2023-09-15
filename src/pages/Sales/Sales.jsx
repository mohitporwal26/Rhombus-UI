import React from "react";
import { Card, Col, Row, Switch, Table } from "antd";
import styles from "./salesStyles.module.scss";
import { Bar, Line } from "react-chartjs-2";
import Chase from "../../assets/images/chase.svg";
import AmericanBank from "../../assets/images/ic_american.svg";
import { MoreOutlined } from "@ant-design/icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import {
  barGraph,
  barGraph2,
  barGraph3,
  dataGraph,
  dataGraph2,
  groupedBarGraph,
  stackedBarGraph,
} from "../../config/graph";
import Button from "../../components/Button/Button";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  LineElement,
  Filler
);
const Sales = () => {
  const optionStacked = {
    responsive: true,
    lineTension: 0.8,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 4000,
        display: true,
        stacked: true,
        grid: {
          display: true,
        },
        ticks: {
          maxTicksLimit: 5,
        },
      },
      x: {
        grid: {
          display: false,
        },
        stacked: true,
        ticks: {
          maxTicksLimit: 6,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  const columns = [
    {
      dataIndex: "Account",
    },
    {
      dataIndex: "ThisMonth",
      align: "right",
    },
    {
      dataIndex: "YTD",
      align: "right",
    },
  ];

  const dataTable = [
    {
      key: "1",
      Account: "Riddle University",
      ThisMonth: "6,232.43",
      YTD: "5,453.75",
    },
    {
      key: "2",
      Account: "City Limousines",
      ThisMonth: "1,233.90",
      YTD: "544.20",
    },
    {
      key: "3",
      Account: "Marine Systems",
      ThisMonth: "987.00",
      YTD: "0.00",
    },
    {
      key: "4",
      Account: "DIISR - Small Business Services",
      ThisMonth: "325.00",
      YTD: "0.00",
    },
    {
      key: "4",
      Account: "ZX Marketplace",
      ThisMonth: "260.63",
      YTD: "260.63",
    },
  ];

  return (
    <div className={`sales ${styles.sales}`}>
      <div className={styles.header}>
        <div className={styles.headerName}>Sales Overview</div>
        <span className={styles.toggleButton}>
          <Button label="Send Statements" />
          <Button type="primary" label="Import" />
        </span>
      </div>
      <div className={`contentAreaSales ${styles.contentArea}`}>
        <div className={styles.headerSales}>
          <span className={styles.title}>Invoices</span>
          <span>See all</span>
        </div>
        <Row gutter={[12, 12]}>
          <Col span={6} order={1}>
            <div className={styles.details}>
              <div className={styles.balanceText}>Draft (2)</div>
              <div className={styles.balanceAmount}>1,103.00</div>
            </div>
          </Col>
          <Col span={6} order={2}>
            <div className={styles.details}>
              <div className={styles.balanceText}>Awaiting Payment (9)</div>
              <div className={styles.balanceAmount}>9,133.53</div>
            </div>
          </Col>
          <Col span={6} order={3}>
            <div className={styles.details}>
              <div className={styles.balanceText}>Awaiting Approval</div>
              <div className={styles.balanceAmount}>-</div>
            </div>
          </Col>
          <Col span={6} order={4}>
            <div className={styles.details}>
              <div className={styles.balanceText}>Overdue (5)</div>
              <div className={styles.balanceAmount}>6955.21</div>
            </div>
          </Col>
        </Row>
        <div className={styles.headerSales}>
          <h2>Quotes</h2>
          <span>See all</span>
        </div>
        <Row>
          <Col span={6} order={1}>
            <div className={styles.details}>
              <div className={styles.balanceText}>Draft (1)</div>
              <div className={styles.balanceAmount}>198.00</div>
            </div>
          </Col>
          <Col span={6} order={2}>
            <div className={styles.details}>
              <div className={styles.balanceText}>Sent (1)</div>
              <div className={styles.balanceAmount}>4,450.00</div>
            </div>
          </Col>
          <Col span={6} order={3}>
            <div className={styles.details}>
              <div className={styles.balanceText}>Accepted(1)</div>
              <div className={styles.balanceAmount}>5,311.10</div>
            </div>
          </Col>
          <Col span={6} order={4}>
            <div className={styles.details}>
              <div className={styles.balanceText}>Expired</div>
              <div className={styles.balanceAmount}>-</div>
            </div>
          </Col>
        </Row>
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Card bordered={true}>
              <div className={styles.header}>
                <span className={styles.title}>Money coming in</span>
                {/* <span className={styles.right-area">Cash in</span>
                <span className={styles.right-area">Cash out</span> */}
              </div>
              <div className={styles.contentText}>
                <div className={styles.graph}>
                  <Bar
                    type="bar"
                    width={600}
                    height={175}
                    options={optionStacked}
                    data={stackedBarGraph}
                  />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={true}>
              <div className={styles.headerTable}>
                <span className={styles.title}>Customers owing the most</span>
                <span className={styles.primary}>See all</span>
              </div>
              <div className={styles.content}>
                <Table
                  showHeader={false}
                  dataSource={dataTable}
                  columns={columns}
                  pagination={false}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Sales;
