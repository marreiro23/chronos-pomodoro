import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <Heading>Ops... Página não encontrada!</Heading>
        <br />
        <p>
          A página que você está tentando acessar não existe ou foi movida.
          Verifique o endereço e tente novamente.
        </p>
        <br />
      </Container>
    </MainTemplate>
  );
}
