import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src='/img/logo.svg'
      alt='Imagem de um átomo e React Avançado escrito ao lado.'
    />
    <S.Title>React avançado</S.Title>
    <S.Description>
      TypeScript, ReactJs, NextJS e Styled Compenents
    </S.Description>
    <S.Ilustration
      src='/img/hero-illustration.svg'
      alt='Um desenvolvedor de frente para uma tela de código'
    />
  </S.Wrapper>
);

export default Main;
