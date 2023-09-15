import React, { useState } from "react";
import styles from "./BankAccountStyles.module.scss";
import Chase from "../../assets/images/chase.svg";

import Button from "../../components/Button/Button";
import { Card, Checkbox, Col, Row, Select } from "antd";
import { Line } from "react-chartjs-2";
import { dataGraph, options } from "../../config/graph";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
const BankAccounts = () => {
  const [checked, setChecked] = useState(true);
  const onChange = (e) => {
    console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };
  return (
    <div className={styles.bankAccounts}>
      <div className={styles.header}>
        <div className={styles.headerName}>Bank Accounts</div>
        <span className={styles.toggleButton}>
          <Button type="primary" label="+ Add Bank Account" />
        </span>
      </div>
      <div className={`contentBank ${styles.contentBank}`}>
        <Row>
          <Col>
            <Card bordered={true}>
              <div className={styles.header}>
                <div className={styles.title}>Business Bank Account</div>
                <div className={styles.rightArea}>
                  <span className={styles.contact}>
                    <img src={Chase} alt="chase" />
                    090-8007-009845
                  </span>
                  <span className={styles.selectBank}>
                    <Select
                      defaultValue="Manage Account"
                      style={{ border: "1px solid #DCDCDC" }}
                      options={[
                        {
                          value: "Manage Account",
                          label: "Manage Account",
                        },
                        {
                          value: "Business Bank Account",
                          label: "Business Bank Account",
                        },
                      ]}
                    />
                  </span>
                </div>
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
                  <div className={styles.item}>Reconcile 23 items</div>
                </div>
                <div className={styles.graphBank}>
                  <Line
                    options={options}
                    data={dataGraph}
                    width={800}
                    height={250}
                  />
                </div>
              </div>
              <div className={styles.contentFooter}>
                <Checkbox
                  checked={checked}
                  disabled={false}
                  onChange={onChange}
                >
                  <span>Show Account on dashboard </span>
                </Checkbox>
                <div className={`footerBank ${styles.footerOrder}`}>
                  <span>Change order</span>
                  <span className={styles.footerArrow}>
                    <UpOutlined />
                    <DownOutlined />
                  </span>
                </div>
              </div>
            </Card>
          </Col>
          <Col>
            <Card bordered={true}>
              <div className={styles.header}>
                <div className={styles.title}>Business Saving Account</div>
                <div className={styles.rightArea}>
                  <span className={styles.contact}>090-8007-009845</span>
                  <span className={styles.selectBank}>
                    <Select
                      defaultValue="Manage Account"
                      style={{ border: "1px solid #DCDCDC" }}
                      options={[
                        {
                          value: "Manage Account",
                          label: "Manage Account",
                        },
                        {
                          value: "Business Bank Account",
                          label: "Business Bank Account",
                        },
                      ]}
                    />
                  </span>
                </div>
              </div>
              <div className={styles.contentsBottom}>
                <div className={styles.contentsText}>
                  <div className={styles.details}>
                    <div className={styles.balanceAmount}>0.00</div>
                    <div className={styles.balanceText}>Statement Balance</div>
                    <div className={styles.balanceText}>
                      No Transactions imported
                    </div>
                  </div>
                </div>
                <div className={styles.graphBank}>
                  <div className={styles.title}> No Transactions imported</div>
                  <div className={styles.desc}>
                    Import a bank statement to get started
                  </div>
                </div>
              </div>
              <div className={styles.contentFooter}>
                <Checkbox
                  checked={checked}
                  disabled={false}
                  onChange={onChange}
                >
                  <span>Show Account on dashboard </span>
                </Checkbox>
                <div className={`footerBank ${styles.footerOrder}`}>
                  <span>Change order</span>
                  <span className={styles.footerArrow}>
                    <UpOutlined />
                    <DownOutlined />
                  </span>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BankAccounts;
