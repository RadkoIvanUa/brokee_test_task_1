import styled from 'styled-components';
import heroImg from '../img/image-hero.png';
import iconCheck from '../img/icon_check.svg';

export const StyledHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: linear-gradient(rgba(38, 40, 43, 0.72), rgba(38, 40, 43, 0.72)),
    url('${heroImg}');
  width: 100vw;
  height: 100vh;

  background-position: center;
  background-size: cover;

  background-repeat: no-repeat;
  background-color: #8a8ea3;

  & > .heroContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    & > .title {
      color: #fff;
      font-size: 40px;
      text-align: center;
    }
  }
`;

export const StyledContent = styled.div`
  font-size: 17px;
  line-height: 1.6;

  & > section {
    & > p {
      margin-bottom: 20px;
      &:first-letter {
        font-size: 35px;
        font-family: monospace;
        line-height: 1.1;
      }
    }

    & > .realityList {
      margin-bottom: 20px;
      & > li {
        display: grid;
        grid-template-columns: 25px 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 10px;

        &:before {
          content: '';
          display: block;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background-image: url(${iconCheck});
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
    }

    & > .letsStart {
      font-weight: 500;
    }
  }
`;
