import Styled from '@emotion/styled';

export const Container = Styled.div`
display: flex;
justify-content: center;
padding: 20px;

`;

export const Head = Styled.h1`
text-align: center;
`;
export const Title = Styled.h2`
    margin-top: 0;
`;

export const FormContainer = Styled.div`
    width: 270px;
    height: min-content;
    border: 1px solid black;
    padding: 10px;
    border-radius: 5px;
`;

export const Form = Styled.form`
display: flex;
flex-direction: column;
`;

export const Label = Styled.label`
margin-bottom: 10px;

`;

export const Input = Styled.input`
display: block;
width: 180px;
margin-bottom: 10px;

`;

export const Button = Styled.button`
display: block;
width: 100px;
`;

export const LeftContainer = Styled.div`
width: 400px;
    border: 1px solid black;
    padding: 10px;
    margin-left: 15px;
    border-radius: 5px;
`;
