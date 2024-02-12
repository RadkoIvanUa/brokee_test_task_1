import styled from 'styled-components';
import heroImg from '../img/image-hero.png';
import iconCheck from '../img/icon_check.svg';
import iconCheck2 from '../img/icon_check2.svg';

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
    margin-bottom: 35px;

    .testList {
      margin-bottom: 20px;
    }

    & > p {
      &:first-letter {
        font-size: 35px;
        font-family: monospace;
        line-height: 1.1;
      }
    }

    & > .realityList {
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
      margin: 10px 0;
    }

    .priceItemWrapper {
      padding: 20px;
      margin: 0 auto;
      box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;

      border-radius: 25px;
      @media (max-width: 768px) {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }

      .priceWrapper {
        & > span:first-child {
          font-size: 50px;
          font-weight: 500;
        }

        & > span:last-child {
          color: rgb(108, 115, 127);
        }
      }

      .priceItemTop {
        &:after {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          background-color: rgb(108, 115, 127);
          margin: 10px 0;
        }
      }

      .priceItemSubtitle {
        font-weight: 500;
        font-size: 20px;
      }
      .priceItemDesc {
        font-size: 15px;
        color: rgb(108, 115, 127);
      }

      .priceFeaturesList {
        margin-bottom: 20px;
        & > li {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 10px;
          &:before {
            content: '';
            display: block;
            width: 25px;
            height: 25px;
            background-image: url(${iconCheck2});
            background-repeat: no-repeat;
            background-size: cover;
          }
        }
      }

      .priceItemButton {
        border: 1px solid rgb(69, 155, 122);
        border-radius: 20px;
        width: 100%;
        padding: 15px;
        background: none;
        font-size: 17px;
        color: rgb(69, 155, 122);
        font-weight: 600;
      }

      .lastPlan {
        background-color: rgb(69, 155, 122);
        color: white;
      }
    }
  }

  .sectionTitle {
    font-weight: 600;
    font-size: 1.6em;
    text-align: center;
  }

  .sectionSubtitle {
    font-size: 1.6em;
    text-align: center;
    margin: 20px 0;
  }
`;
