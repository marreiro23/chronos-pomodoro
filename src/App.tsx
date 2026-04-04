import "./styles/global.css";
import "./styles/theme.css";

import { Container } from "./components/Container/index";
import { Heading } from "./components/Heading/index";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";

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
    </>
  );
}
