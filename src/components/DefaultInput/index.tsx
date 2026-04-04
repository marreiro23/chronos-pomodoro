import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    // fragmento para evitar criar uma div desnecessária, e também para evitar criar um componente desnecessário, caso o input seja utilizado apenas uma vez.
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
