import { HhDataProps } from "./HhData.props";
import styles from "./HhData.module.css";
import { Card } from "../Card/Card";
import RateIcon from "@/public/rate.svg";

export function HhData({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps) {
  return (
    // !ОСТАЛОСЬ АДАПТИВ!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles["count__value"]}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div className={styles["salary__block"]}>
          <div className={styles.title}>Начальный</div>
          <div className={styles["salary__value"]}>{juniorSalary}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled}/>
            <RateIcon/>
            <RateIcon/>
          </div>
        </div>
        <div className={styles["salary__block"]}>
          <div className={styles.title}>Средний</div>
          <div className={styles["salary__value"]}>{middleSalary}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled}/>
            <RateIcon className={styles.filled}/>
            <RateIcon/>
          </div>
        </div>
        <div className={styles["salary__block"]}>
          <div className={styles.title}>Профессионал</div>
          <div className={styles["salary__value"]}>{seniorSalary}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled}/>
            <RateIcon className={styles.filled}/>
            <RateIcon className={styles.filled}/>
          </div>
        </div>
      </Card>
    </div>
  );
}