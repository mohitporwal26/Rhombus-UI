import React from "react";
import styles from "./BusinessSnapshotStyles.module.scss";
import Button from "../../components/Button/Button";
import { PrinterOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";

const BusinessSnapshot = () => {
  return (
    <div className={styles.businessSnapshot}>
      <div className={styles.header}>
        <div className={styles.headerName}>Business Snapshot</div>
        <span className={styles.toggleButton}>
          <Button type="primary" label="Print" icon={<PrinterOutlined />} />
        </span>
      </div>
      <Content className={styles.content}>
        <div className={styles.headerContent}>
          <div className={styles.headerName}>Lajou Cafe</div>
          <span className={styles.headerDesc}>
            For the period Feb 1, 2021 - Apr 1, 2021
          </span>
        </div>
      </Content>
      <div className={`contentBank ${styles.contentBank}`}></div>
    </div>
  );
};

export default BusinessSnapshot;
