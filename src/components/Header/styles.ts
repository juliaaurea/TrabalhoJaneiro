import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const SHeader = styled.header`
  /* Cabeçalho */
  background-color: ${colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5rem solid ${colors.secondary};
  border-bottom-style: solid;
  height: 5rem;
  figure {
    display: flex;
    align-items: center;
    img {
      padding: 0.3rem;
    }
  }
`

export const SNavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: ${colors.quaternary};
  }
  a:hover {
    font-weight: itim;
  }
`