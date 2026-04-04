import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

// Pesquisar sobre reestruturação de código, para evitar passar props desnecessárias para componentes filhos, e também para evitar passar props que não são utilizadas por um componente filho.
export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href="#">
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}
