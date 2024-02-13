import styled from 'styled-components';

export const StyledFeature = styled.section`
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }

  .featureItem {
    display: grid;
    grid-template-columns: 1fr 45px 1fr;
    grid-column-gap: 10px;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 100px 1fr;
      grid-column-gap: 15px;
      font-size: 20px;
    }

    &:not(:last-child) {
      margin-bottom: 25px;
    }
    .featureText {
      box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
      border-radius: 14px;
      padding: 15px 30px;
    }

    .leftSide {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: #adb1b8;
      .iconThumb {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 120px;
        box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
        border-radius: 50%;
        margin-bottom: 20px;
        @media (min-width: 768px) {
          width: 250px;
          height: 250px;
        }
      }
    }
  }
`;
