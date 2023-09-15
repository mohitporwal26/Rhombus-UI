import React from "react";
import styles from "./BusinessSnapshotStyles.module.scss";
import Button from "../../components/Button/Button";
import { PrinterOutlined } from "@ant-design/icons";

const BusinessSnapshot = () => {
  return (
    <div className={styles.businessSnapshot}>
      <div className={styles.header}>
        <div className={styles.headerName}>Business Snapshot</div>
        <span className={styles.toggleButton}>
          <Button type="primary" label="Print" icon={<PrinterOutlined />} />
        </span>
      </div>
      <div className={`contentBank ${styles.contentBank}`}></div>
    </div>
  );
};

export default BusinessSnapshot;
