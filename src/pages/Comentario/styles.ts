import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 0.5rem;
  align-content: baseline;
  background-color: var(--tertiary);
  padding: 0.5rem;
  border-radius: 0.5rem;
  min-height: 7rem;
  aside {
    display: flex;
    margin: 0.5rem 0;
    p {
      font-size: 0.8rem;
    margin-left: 0.5rem;
    }
    h4 {
      font-weight: 400;
    }
  }
  @media (max-width: 1010px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    font-size: 0.9rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`
