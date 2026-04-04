import "./styles/global.css";
import "./styles/theme.css";

import { Container } from "./components/Container/index";
//import { Heading } from "./components/Heading/index";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput/index";
import { Cycles } from "./components/Cycles";

export function App() {
  return (
    <>
      <Container>
        <Logo />
        {/* <section>LOGO</section> */}
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText="Com LabelText "
              id="meuInput"
              type="text"
              placeholder="Digite aqui"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <button type="submit">Iniciar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
