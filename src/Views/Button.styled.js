import styled from '@emotion/styled/macro';

export const Button = styled.button`
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    padding: 10px 28px;
    max-width: 200px;
    font-weight: 700;
    font-size: 15px;
    text-align: center;
    letter-spacing: 0.06em;
    text-decoration: none;
    background-color: transparent;
    border: solid 1.5px #848484;
    color: #848484;
    border-radius: 4px;
    cursor: pointer;
  &:hover {
    border:  solid 1.5px #09c3e4;
    box-shadow: 0 0 20px rgb(135, 206, 250);
    color: black;
  }
`;
