import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import CheckIcon from "@/public/check.svg";
import { Heading } from "../Heading/Heading";

export function Advantages({advantages}: AdvantagesProps) {
  if(advantages.some(advantage => !advantage.title)) {
    return <></>;
  }
  return (
    <div className={styles.advantages}>
      <Heading tag="h2">Преимущества</Heading>
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