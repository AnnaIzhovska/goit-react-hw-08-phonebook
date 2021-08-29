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
    border:  solid 1.5px #6b6a6a4c;
    border-radius:5px;

&:hover{
    color: #09c3e4;
    border:  solid 1.5px #09c3e4;
    box-shadow: 0 0 20px rgb(135, 206, 250);
background: linear-gradient(225deg, rgba(111,112,113,0.4182715322457108) 0%, rgba(209,210,214,0.6451622885482318) 50%, rgba(160,159,164,0.33143679835215334) 100%);}`

export const ButtonLogOut = styled.button`
    align-items: center;
    justify-content: center;
    margin-left:5px;
    padding: 6px 8px;
    max-width: 200px;
    font-weight: 700;
    font-size: 15px;
    text-align: center;
    letter-spacing: 0.06em;
    text-decoration: none;
    background-color: transparent;
    border:  solid 1.5px #6b6a6a4c;
    border-radius:5px;
    color: #6b6a6a4c;

&:hover{
    color: #09c3e4;
    border:  solid 1.5px #09c3e4;
    box-shadow: 0 0 20px rgb(135, 206, 250);
  background: linear-gradient(225deg, rgba(111,112,113,0.4182715322457108) 0%, rgba(209,210,214,0.6451622885482318) 50%, rgba(160,159,164,0.33143679835215334) 100%);
}
`