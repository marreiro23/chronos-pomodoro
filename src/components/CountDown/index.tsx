import styles from "./styles.module.css";

// Pesquisar sobre reestruturação de código, para evitar passar props desnecessárias para componentes filhos, e também para evitar passar props que não são utilizadas por um componente filho.
export function CountDown() {
  return <div className={styles.container}>00:00</div>;
}
