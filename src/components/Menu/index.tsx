import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvailableThemes = "light" | "dark";

// Pesquisar sobre reestruturação de código, para evitar passar props desnecessárias para componentes filhos, e também para evitar passar props que não são utilizadas por um componente filho.
export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("light");

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //nao recarrega a página ao clicar no link

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "light" ? "dark" : "light";
      return nextTheme;
    });

    //document.documentElement.setAttribute("data-theme", theme);
  }

  // useEffect(() => {
  //  console.log("useEffect sem dependências", Date.now());
  // }); //Executado todas as vezes que o componente for renderizado na tela.

  /*useEffect(() => {
    console.log("useEffect com array de dependências vazio", Date.now());
  }, []); //Executado apenas na primeira renderização do componente na tela. Util para uso em apis para nao fazer sincronizações desnecessárias.
*/
  useEffect(() => {
    console.log("Theme mudou", theme, Date.now());
    document.documentElement.setAttribute("data-theme", theme);

    return () => {
      console.log("Olha esse componente será atualizado", Date.now());
    };
  }, [theme]); //Executado todas as vezes que o componente for renderizado na tela.

  // useEffect(() => {
  //  console.log("", Date.now());
  // });

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar tema"
        title="Mudar tema"
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
