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

         
          <div
          style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px", textAlign:'center'}}
        >
          Please make payment !
        </div>
        <div className={styles.flexDescrDiv}>

           <span>Please do not</span>
           <span className={styles.semiBold}>"refresh"</span>
           {" "}
           <span>the page or click on the</span>
           <span className={styles.semiBold} >"Back"</span> or<span className={styles.semiBold} >
            "Close" </span>{" "}<span>button of your browser</span>
        </div>
      </div>
    </div>
  ) : (
    navigate("/successfulBooking")
  );
};

export default Processing;
