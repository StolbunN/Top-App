import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import CheckIcon from "@/public/check.svg";

export function Advantages({advantages}: AdvantagesProps) {
  return (
    <div className={styles.advantages}>
      {advantages.map(advantage => {
        return (
          <div key={advantage._id} className={styles.advantage}>
            <CheckIcon/>
            <h3 className={styles.title}>{advantage.title}</h3>
            <hr className={styles.line}/>
            <div className={styles.description}>{advantage.description}</div>
          </div>
        );
      })}
    </div>
  );
}