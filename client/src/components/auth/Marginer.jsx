import React from "react";
import styles from './Marginer.module.css';

export default function Marginer(props) {
  const { direction, margin } = props;

  if (direction === "horizontal") {
    return <span className={styles.horizontalMargin} style={{ '--margin': margin }} />;
  } else {
    return <span className={styles.verticalMargin} style={{ '--margin': margin }} />;
  }
}

Marginer.defaultProps = {
  direction: "horizontal",
};
