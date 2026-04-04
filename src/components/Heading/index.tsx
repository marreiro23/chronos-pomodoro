import type React from "react";
import styles from "./Styles.module.css";

type StylesProps = {
  children: React.ReactNode;
};

// Pesquisar sobre reestruturação de código, para evitar passar props desnecessárias para componentes filhos, e também para evitar passar props que não são utilizadas por um componente filho.
export function Styles({ children }: StylesProps) {
  return <h1 className={styles.styles}>{children}</h1>;
}
