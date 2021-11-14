import styled from "styled-components";

export const HeroSectionStyled = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background-color: #eaeaea;

  .hero {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 364px;
    background: linear-gradient(274.83deg, #5db0df 0.58%, #5d7adf 74.3%);

    .Heading {
      position: absolute;
      width: 511px;
      height: 72px;
      left: 143px;
      top: 142px;
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 72px;
      color: white;
    }
    .Heading2 {
      position: absolute;
      width: 654px;
      height: 30px;
      left: 143px;
      top: 207px;

      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      /* identical to box height */
      color: #ffffff;
    }

    .search {
      position: absolute;
      width: 1154px;
      height: 100px;
      left: 143px;
      top: 314px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #ffffff;
      box-shadow: 2px 12px 8px 2px rgba(0, 0, 0, 0.05);
      border-radius: 24px;

      > span {
        display: flex;
        align-items: center;
        svg {
          margin-right: 10px;
        }
        .job-inp {
          border: none;
          width: 156px;
          height: 24px;
          left: 211px;
          top: 352px;

          font-family: Poppins;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          /* identical to box height */

          color: #7b7b7b;

          &:focus {
            outline: none;
          }
        }

        select {
          width: 258px;
          height: 24px;
          left: 655px;
          top: 352px;

          font-family: Poppins;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          /* identical to box height */
          border: none;

          color: #7b7b7b;
          &:focus {
            outline: none;
          }
        }
      }
      button {
        /* position: absolute; */
        width: 280px;
        height: 60px;
        left: 995px;
        top: 334px;
        border: none;
        cursor: pointer;
        background: #f07987;
        border-radius: 8px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        /* identical to box height */

        color: #ffffff;
      }
    }
  }
`;
