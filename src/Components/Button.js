import styled from 'styled-components';

let Button = styled.button`
  height: 3rem;
  width: 10rem;

  background-color: #ee3c3c;
  color: white;
  font-size: 1.2rem;

  border-radius: 5px;
  border: none;
  outline: none;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.4;
  }
`;

export default Button;
