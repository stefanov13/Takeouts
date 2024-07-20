import { Link } from 'react-router-dom';

import styles from './Common.module.css';

export const BoxContainer = (props) => (
  <div className={styles.boxContainer}>{props.children}</div>
);

export const FormContainer = (props) => (
  <form className={styles.formContainer}>{props.children}</form>
);

export const MutedLink = (props) => (
  <Link className={styles.mutedLink} {...props}>{props.children}</Link>
);

export const BoldLink = (props) => (
  <a className={styles.boldLink} {...props}>{props.children}</a>
);

export const Input = (props) => (
  <input className={styles.input} {...props} />
);

export const SubmitButton = (props) => (
  <button className={styles.submitButton} {...props}>{props.children}</button>
);

export const LineText = (props) => (
  <p className={styles.lineText}>{props.children}</p>
);
