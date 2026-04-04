import "./styles/global.css";
import "./styles/theme.css";

import { Container } from "./components/Container";
//import { Heading } from "./components/Heading/index";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";
import { Heading } from "./components/Heading";

export function App() {
  const numero = 10;
  return (
    <>
      <Heading>Número: {numero}</Heading>

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
              labelText={numero.toString()}
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
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
