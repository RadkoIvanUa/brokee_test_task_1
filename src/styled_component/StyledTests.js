import styled from 'styled-components';

export const StyledTests = styled.div`
  & > h2 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
      font-size: 34px;
      margin-bottom: 4rem;
    }
  }

  & > .testList {
    margin: 0 auto;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    & > .listItem {
      padding: 20px;
      margin: 0 auto;
      box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;

      border-radius: 25px;
      @media (max-width: 768px) {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }

      & > div {
        & > .imgThumb {
          width: 200px;
          height: 250px;
          margin: 0 auto 10px auto;
        }

        & > .itemTitle {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }

        & > .itemSubtitle {
          font-size: 1rem;
          color: #6c757d;
          font-weight: 500;
          display: block;
          margin-bottom: 0.5rem;
        }

        & > .itemText {
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }
      }

      @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      & > .itemButton {
        display: block;
        text-align: center;
        border-radius: 2rem;
        background-color: rgb(69, 155, 122);
        border: none;
        padding: 0.375rem 0.75rem;
        cursor: pointer;
        color: #fff;
        text-decoration: none;
        font-size: 1rem;

        @media (min-width: 1280px) {
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          &:hover {
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
            background-color: rgb(60, 133, 106);
          }
        }
      }

      & > .disabledBtn {
        opacity: 0.65;
      }
    }

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      grid-gap: 30px;
    }
    @media (min-width: 1280px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
