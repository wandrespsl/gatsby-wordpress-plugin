import styled from "styled-components"

export const colors = {
  ligthBlue: "#21d4fd",
  purple: "#B720FF",
  darkPurple: "#2d2045",
  textGray: "#888888",
  red: "#e60023",
  ligthGray: "#f5f5f5",
  black: "#060606",
}

export const StyledHeader = styled.header`
  background: transparent;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 2rem 2.625rem 0.625rem;
  z-index: 10000;
  transition: all 0.5s ease;
  height: auto;
  display: flex;
  justify-content: space-between;
  .gatsby-image-wrapper {
    width: 7rem;
  }
  a {
    color: ${colors.ligthBlue};
  }
`

export const StyledCard = styled.div`
  border-radius: 1rem;
  box-shadow: 0px 0px 0.25rem 0 rgba(0, 0, 0, 0.1);
  padding: 0;
  border: none;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem 2rem;
  .header-post {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #ddd;
    width: 90%;
    margin: 0 auto 0.938rem;
    padding: 0.938rem;
    img {
      border-radius: 50% !important;
      border: solid 1px #e9ebee;
      width: 40px;
      height: 40px;
      margin: 0 10px 0 0;
    }
  }
  .title {
    line-height: 1.375rem;
    font-size: 1.125rem;
    h2 {
      color: ${colors.ligthBlue};
      font-weight: 300;
      margin: 0 auto;
      padding: 0.938rem;
    }
  }
  .body {
    margin: 0 auto;
    padding: 0.938rem;
    color: #999999;
    font-size: 1rem;
    font-weight: 300;
  }
  a {
    text-decoration: none;
  }
`
export const Button = styled.button`
  cursor: pointer;
  background-color: ${({ type }) =>
    type === "outline" ? "transparent" : colors.purple};
  color: ${({ type }) => (type === "outline" ? colors.ligthBlue : "white")};
  font-size: 1.25rem;
  padding: 0.2rem 1rem;
  font-weight: 500;
  border: ${({ type }) =>
    type === "outline"
      ? `0.125rem solid ${colors.ligthBlue}`
      : `0.125rem solid ${colors.purple}`};
  border-radius: 1.313rem;
  .btn-primary {
    text-decoration: none;
    color: ${({ type }) => (type === "outline" ? colors.ligthBlue : "white")};
    .btn-video {
      width: 1.5rem;
      height: 1.5rem;
      background: ${colors.ligthBlue};
      border-radius: 50%;
      position: relative;
      right: -0.5em;
      .caret-2:before {
        content: "";
        position: absolute;
        top: 0.35em;
        left: 0.5em;
        border-top: 0.25em solid transparent;
        border-left: 0.4em solid ${colors.darkPurple};
        border-right: 0.25em solid transparent;
        border-bottom: 0.25em solid transparent;
      }
    }
  }
  &.white {
    border-color: white;
    a {
      color: white;
    }
  }
  &:disabled {
    background-color: ${colors.gray};
    border-color: ${colors.gray};
    cursor: not-allowed;
  }
  + button {
    margin: 0 0 0 1rem;
  }
`
export const StyledSection = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .custom-section {
    height: 100%;
    padding: 4.375rem 0;
    .container {
      height: 100%;
      display: flex;
      align-items: center;
      max-width: 70rem;
      span.title {
        font-size: 70px;
        line-height: 75px;
        margin: 100px 0 14px;
        color: white;
        padding: 0;
        font-weight: 800;
        letter-spacing: -0.04px;
      }
      h1 {
        font-size: 1.625rem;
        line-height: 30px;
        font-weight: 400;
        padding: 0;
        margin: 1rem 0 5rem 0;
        color: white;
        opacity: 0.9;
        strong {
          display: block;
          font-weight: 400;
          color: white;
        }
      }
      .dp-flex {
        display: flex;
        align-items: center;
      }
      .column-7 {
        width: 60%;
      }
    }
  }
  &.home-two {
    background: ${colors.ligthBlue};
    .column-6 {
      width: 50%;
    }
    p.ready {
      color: white;
      font-weight: 800;
      .ready1 {
        font-size: 2.813rem;
        opacity: 0.68;
        line-height: 2.5rem;
      }
      a {
        font-size: 4.688rem;
        color: white;
        opacity: 0.91;
        display: block;
        line-height: 3.625rem;
        text-decoration: none;
      }
      .ready2 {
        font-size: 5.5rem;
        opacity: 0.71;
        padding: 0 0 0 5rem;
        line-height: 4.375rem;
      }
    }
    .description {
      max-width: 34.375rem;
      margin-left: 8.33333333%;
      p {
        font-size: 1.375rem;
        line-height: 1.688rem;
        color: white;
        font-weight: 300;
        letter-spacing: -0.1px;
      }
    }
  }
  a.no-link {
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    font-weight: inherit;
    display: inline;
  }
  &.home-nutshell {
    .custom-section {
      width: 100%;
      .container {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 0 auto;
        h3 {
          color: ${colors.darkPurple};
          margin-bottom: 3.125rem;
          margin-top: 2.5rem;
          position: relative;
          font-size: 3.125rem;
          margin: 0 0 1.563rem;
          line-height: 3.438rem;
          font-weight: 800;
          letter-spacing: -0.04px;
          &:before {
            content: "PSL";
            font-size: 6.875rem;
            font-weight: 900;
            color: ${colors.darkPurple};
            opacity: 0.07;
            position: absolute;
            left: 0;
            top: 50%;
            line-height: 6.875rem;
            margin-top: -5.938rem;
          }
        }
        .d-grid {
          display: grid;
          grid-column-gap: 0;
          grid-row-gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
          width: 100%;
          .nutshell-data {
            margin: 0 30px 0 0;
            padding: 0 0 0 30px;
            position: relative;
            &:before {
              background: #e9ebee;
              content: "";
              display: block;
              height: 80px;
              position: absolute;
              left: 0;
              top: 0;
              width: 1px;
            }
            &:first-child {
              &:before {
                display: none;
              }
            }

            .data {
              font-size: 50px;
              color: ${colors.ligthBlue};
              font-weight: 800;
              line-height: 73px;
            }

            h4 {
              color: ${colors.darkPurple};
              font-size: 16px;
              font-weight: 300;
              line-height: 19px;
              margin: 0;
              padding: 0;
            }
          }
        }
      }
    }
  }
  &.home-services {
    background: ${colors.darkPurple};
    .custom-section {
      .column-4 {
        width: 34%;
      }
      .column-7 {
        width: 58%;
        margin-left: 8%;
      }
    }

    h2 {
      color: white;
      font-size: 3.125rem;
      margin: 0 0 1.563rem;
      line-height: 3.563rem;
      font-weight: 800;
      letter-spacing: -0.04px;
      a {
        color: white;
        text-decoration: none;
      }
    }
    h3 {
      color: white;
      font-size: 1.5rem;
      display: block;
      text-decoration: none;
      font-weight: 300;
      letter-spacing: -0.1px;
      line-height: 1.688rem;
      a {
        color: ${colors.ligthBlue};
        text-decoration: none;
      }
    }
    /* accordionPSL */
    .panel-group {
      margin-bottom: 1.375rem;
      .panel {
        border: 0;
        margin-bottom: 0;
        border-radius: 0.25rem;
        .panel-heading {
          background-color: ${colors.darkPurple};
          padding: 1.5rem 0;
          .panel-title {
            a {
              text-decoration: none;
              font-family: "WorkSans-Medium";
              cursor: pointer;
              display: flex;
              align-items: flex-start;
              color: ${colors.ligthBlue};
              .caret {
                color: ${colors.ligthBlue};
                margin: 0.8rem 1.25rem 0 0.125rem;
                width: 0;
                height: 0;
                border-bottom: none;
                border-top: 6px dashed;
                border-right: 6px solid transparent;
                border-left: 6px solid transparent;
              }
              h3 {
                font-size: 1.375rem;
                color: ${colors.ligthBlue};
                letter-spacing: -1px;
                font-weight: 500;
                text-align: left;
                margin: 0;
                line-height: 1.563rem;
              }
            }
          }
        }
        .panel-collapse {
          &.collapse {
            display: none;
          }
          .panel-body {
            color: white;
            padding: 0 0 1.25rem 2.188rem;
            font-size: 1.125rem;
            font-weight: 300;
            line-height: 1.688rem;
            button {
              padding: 0rem 1rem 0.1rem;
              margin: 1rem 0 0;
              a {
                font-size: 0.938rem;
                line-height: 1.33;
              }
            }
          }
        }
      }
    }
  }
  &.home-awardsRankings {
    .title-awards h3 {
      font-size: 3.125rem;
      text-align: left;
      margin: 0;
      line-height: 3.438rem;
      font-weight: 800;
      letter-spacing: -0.04px;
      color: ${colors.ligthBlue};
    }
  }
`
export const StyledFooter = styled.div`
  background: ${colors.darkPurple};
  color: white;
  padding: 2.5rem 0 0 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .custom-home-about-us {
    max-width: 70rem;
    margin: 0 auto;
    .container {
      display: flex;
      align-items: start;
      justify-content: space-between;
      flex-wrap: wrap;
      p {
        font-size: 0.875rem;
        font-weight: 300;
        color: white;
        padding: 0;
        line-height: 1.5rem;
        a {
          font-size: 0.875em;
          font-weight: 300;
          color: ${colors.ligthBlue};
          line-height: 1.938em;
          display: block;
          margin: 0.625rem 0 0;
          text-decoration: none;
          &.no-link {
            color: white;
            margin: 0;
          }
        }
      }
      h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0 0 1.563rem;
        line-height: 3.438rem;
        letter-spacing: -0.003rem;
      }
      ul {
        margin: 0 0 0.688rem;
        padding: 0;
        li {
          list-style: none;
          padding: 0;
          margin: 0;
          a {
            font-size: 0.875rem;
            font-weight: 300;
            color: ${colors.ligthBlue};
            line-height: 1.938rem;
            text-decoration: none;
          }
        }
      }
      .gatsby-image-wrapper {
        width: 35%;
        opacity: 1;
        margin-bottom: 2.188rem;
      }
      .column-3 {
        width: 25%;
        padding: 0 1rem;
      }
      .column-4 {
        width: 33.33333333%;
        padding: 0 1rem;
      }
      .column-2 {
        width: 16.66666667%;
        padding: 0 1rem;
      }
    }
  }
`
