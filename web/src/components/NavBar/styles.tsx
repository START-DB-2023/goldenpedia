import styled from "styled-components";

export const NavContainer = styled.div`
  max-height: 10rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const Logo = styled.img`
  @media(max-width: 1230px) {
    width: 30rem;
  }
  @media(max-width: 800px) {
    width: 20rem;
  }
`;
