import styles from "./styles.module.css";

type HeadingProps = {
  children: React.ReactNode;
};

// Pesquisar sobre reestruturação de código, para evitar passar props desnecessárias para componentes filhos, e também para evitar passar props que não são utilizadas por um componente filho.
export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
