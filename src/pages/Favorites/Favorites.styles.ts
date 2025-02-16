import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4.8rem 0;
  gap: 2.4rem;
`

export const Title = styled.h1`
  fontsize: ${({ theme }) => theme.fontSize.lg};
  fontweight: ${({ theme }) => theme.fontSize.bold};
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  padding: 0 4.8rem;
  lineheight: 18.75rem;
`
