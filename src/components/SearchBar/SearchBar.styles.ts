import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.2rem 4.8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.2rem 1.6rem;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.8rem;
  gap: 1.2rem;
  border-bottom: ${({ theme }) => `0.1rem solid ${theme.colors.black}`};
`

export const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`

export const ResultsCount = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
`
