import styled from 'styled-components'

export const GridItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  gap: 1.6rem;
  padding: 0 4.8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1.6rem;
  }
`
