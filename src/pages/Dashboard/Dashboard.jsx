import React from "react";
import { Card, Col, Row, Switch, Table } from "antd";
import styles from "./DashboardStyles.module.scss";
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
} from "../../config/graph";

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
const Dashboard = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const optionsBar = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    type: "bar",
    color: "purple",
    animation: {
      animateScale: true,
    },
    categoryPercentage: 1.0, // here
    scales: {
      x: {
        grid: {
          display: false,
        },
        display: false,
        ticks: {
          maxTicksLimit: 8,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: false,
        min: 0,
        max: 2000,
        display: false,
        ticks: {
          // maxTicksLimit: 500,
          stepSize: 500,
        },
      },
    },
    tooltips: {},
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    lineTension: 0.8,
    scales: {
      y: {
        beginAtZero: true,
        max: 2000,
        display: false,
        ticks: {
          maxTicksLimit: 5,
        },
      },
      x: {
        grid: {
          display: false,
        },
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

  const optionStacked = {
    responsive: true,
    lineTension: 0.8,
    plugins: {
      legend: {
        labels: {
          position: "top",
          boxWidth: 8,
          boxRadius: 3,
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 2000,
        display: false,
        ticks: {
          maxTicksLimit: 5,
        },
      },
      x: {
        grid: {
          display: false,
        },
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
      title: "Account",
    },
    {
      dataIndex: "ThisMonth",
      title: "This Month",
      align: "right",
    },
    {
      dataIndex: "YTD",
      title: "YTD",
      align: "right",
    },
  ];

  const dataTable = [
    {
      key: "1",
      Account: "Entertainment (600)",
      ThisMonth: "2,500.00",
      YTD: "10,453.00",
    },
    {
      key: "2",
      Account: "Advertising (620)",
      ThisMonth: "0.00",
      YTD: "53.60",
    },
    {
      key: "3",
      Account: "Inventory (140)",
      ThisMonth: "0.00",
      YTD: "0.00",
    },
    {
      key: "4",
      Account: "Sales (400)",
      ThisMonth: "7654.10",
      YTD: "29,250.85",
    },
  ];

  return (
    <div className={`dashboard ${styles.dashboard}`}>
      <div className={styles.headerName}>Hi, Katie</div>
      <div className={styles.subheader}>
        <span className={styles.description}>
          Here's what's going on with Lajou Cafe finance
        </span>
        <span className={styles.toggleButton}>
          Private <Switch defaultChecked onChange={onChange} />
        </span>
      </div>
      <div className={`contentArea ${styles.contentArea}`}>
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Card bordered={true}>
              <div className={styles.header}>
                <span className={styles.title}>Business Bank Account</span>
                <span className={styles.rightArea}>
                  <img src={Chase} alt="chase" />
                  <MoreOutlined />
                </span>
              </div>
              <div className={styles.contents}>
                <div className={styles.contentsText}>
                  <div className={styles.details}>
                    <div className={styles.balanceAmount}>3,980.00</div>
                    <div className={styles.balanceText}>Balance in Rhombus</div>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.balanceAmount}>4,808.00</div>
                    <div className={styles.balanceText}>Statement Balance</div>
                  </div>
                  <div className={styles.items}>Reconcile 23 items</div>
                </div>
                <div className={styles.graph}>
                  <Line options={options} data={dataGraph} />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={true}>
              <div className={styles.header}>
                <span className={styles.title}>Business Performance</span>
              </div>
              <div className={styles.contentDetails}>
                <div className={styles.details}>
                  <div className={styles.balanceAmount}>1.72</div>
                  <div className={styles.balanceText}>Current Ratio</div>
                </div>
                <div className={styles.graph}>
                  <Bar
                    type="bar"
                    width={280}
                    height={60}
                    options={optionsBar}
                    data={barGraph}
                  />
                </div>
              </div>
              <div className={styles.contentDetails}>
                <div className={styles.details}>
                  <div className={styles.balanceAmount}>8.99%</div>
                  <div className={styles.balanceText}>Gross Profit %</div>
                </div>
                <div className={styles.graph}>
                  <Bar
                    type="bar"
                    width={280}
                    height={60}
                    options={optionsBar}
                    data={barGraph2}
                  />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Card bordered={true}>
              <div className={styles.header}>
                <span className={styles.title}>Business Saving Account</span>
                <span className={styles.rightArea}>
                  <img src={AmericanBank} alt="chase" />
                  <MoreOutlined />
                </span>
              </div>
              <div className={styles.contents}>
                <div className={styles.contentsText}>
                  <div className={styles.details}>
                    <div className={styles.balanceAmount}>3,980.00</div>
                    <div className={styles.balanceText}>Balance in Rhombus</div>
                  </div>
                  {/* <div className={styles.details">
                    <div className={styles.balance-amount">4,808.00</div>
                    <div className={styles.balance-text">Statement Balance</div>
                  </div> */}
                  <div className={styles.items}>Reconciled</div>
                </div>
                <div className={styles.graph}>
                  <Line options={options} data={dataGraph2} />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={true}>
              <div className={styles.header}>
                <span className={styles.title}>Total cash in and out</span>
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
                    data={groupedBarGraph}
                  />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Card bordered={true}>
              <div className={styles.header}>
                <span className={styles.title}>Invoice owed to you</span>
                <span className={styles.rightAreaSales}>New Sales Invoice</span>
              </div>
              <div className={styles.contentText}>
                <div className={styles.numbers}>
                  <div className={styles.balance}>0.00</div>
                  <div className={styles.balanceText}>0 Draft bills</div>
                </div>
                <div className={styles.numbers}>
                  <div className={styles.balance}>4,808.00</div>
                  <div className={styles.balanceText}>17 Awaiting payment</div>
                </div>
                <div className={styles.numbers}>
                  <div className={styles.balance}>4,808.00</div>
                  <div className={styles.balanceText}>4 Overdue</div>
                </div>
              </div>
              <div className={styles.graphSingle}>
                <Bar
                  type="bar"
                  width={500}
                  height={175}
                  options={options}
                  data={barGraph3}
                />
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={true}>
              <div className={styles.header}>
                <span className={styles.title}>Account Watchlist</span>
              </div>
              <div
                className={`contentTableDashboard ${styles.contentTableDashboard}`}
              >
                <Table
                  className={styles.table}
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

export default Dashboard;
