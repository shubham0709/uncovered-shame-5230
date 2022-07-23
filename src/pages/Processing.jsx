import React from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import styles from "../Styles/Processing.module.css";

const Processing = () => {
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return loading ? (
    <div className={styles.ProcessingPageWrapper}>
      <div className={styles.Processingbar}>
        <div>
          <Spinner />
        </div>
        <div style={{ fontSize: "18px", fontWeight: 600 }}>
          Processing........
        </div>
      </div>

      <div style={{ fontSize: "16px" }}>
        <p className={styles.Statement}>
          You might have received a notification
        </p>

        <span
          style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px" }}
        >
          Please make payment !
        </span>

        <p style={{ marginTop: "30px" }}>
          Please do not
          <span style={{ fontSize: "18px", fontWeight: "600" }}>
            "refresh"
          </span>{" "}
          the page or click on the
          <span style={{ fontSize: "18px", fontWeight: "600" }}>"Back"</span> or
          <span style={{ fontSize: "18px", fontWeight: "600" }}>
            "Close"
          </span>{" "}
          button of your browser
        </p>
      </div>
    </div>
  ) : (
    navigate("/successfulBooking")
  );
};

export default Processing;
