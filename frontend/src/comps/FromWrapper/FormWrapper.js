import styles from "./FormWrapper.module.css";

export const FormWrapper = ({ children }) => {
  return (
    <>
      <main className={styles.pageBackground}>
        <div className={styles.pageBackgroundGradient}>
          <div className={styles.pageBackgroundGradientSecond}>{children}</div>
        </div>
      </main>
    </>
  );
};
