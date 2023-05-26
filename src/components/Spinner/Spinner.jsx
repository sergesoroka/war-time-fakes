import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className="flex justify-center opacity-50">
      <div className={styles.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
