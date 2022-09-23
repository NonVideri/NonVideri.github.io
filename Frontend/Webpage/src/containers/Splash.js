import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';

const SplashSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background-image: url('https://i.imgur.com/gQO48Eh.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 40%;
  background-attachment: fixed;
  height: 500px;
`;

const PageIntro = styled.div`
  text-align: center;
`;

const MainTitle = styled.h1`
  margin: 0;
  font-weight: normal;
  color: $color-main;
  font-size: 60px;
  font-family: ${(props) => props.theme.fontTitles};
`;

const MainSubtitle = styled.h2`
  margin: 12px 0 60px 0;
  font-weight: normal;
  color: ${(props) => props.theme.colorMain};
  font-size: 28px;
  font-variant: small-caps;
  font-weight: bold;
  font-family: $font-main;
  font-family: ${(props) => props.theme.fontTitles};
`;

const MainButton = styled.a`
  padding: 18px 24px 18px 24px;
  font-size: 14px;
  margin: 12px 12px 12px 0px;
  background-color: ${(props) => props.theme.colorMain};
  color: ${(props) => props.theme.colorBackground};
  transition: all 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.colorBoxes};
    color: ${(props) => props.theme.colorMain};
  }
`;

export default function Splash({ mode }) {
  if (mode === 'translations')
    return (
      <SplashSection>
        <PageIntro>
          <MainTitle>Krzysztof Moszyński</MainTitle>
          <MainSubtitle>Japanese-English-Polish Translator and Interpreter</MainSubtitle>
          <MainButton className="btn btn-solid" href="#services">
            My services
          </MainButton>
        </PageIntro>
      </SplashSection>
    );

  return (
    <SplashSection>
      <PageIntro>
        <MainTitle>Krzysztof Moszyński</MainTitle>
        <MainSubtitle>Javascript Developer</MainSubtitle>
        <MainButton className="btn btn-solid" href="#projects">
          See my work
        </MainButton>
      </PageIntro>
    </SplashSection>
  );
}
