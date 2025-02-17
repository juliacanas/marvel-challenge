import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;
  max-width: 96rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`
export const CharacterImg = styled.img`
  width: 27.8rem;
  height: 27.8rem;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: auto;
  }
`
export const CharacterInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 4.8rem 0 4.8rem 4.8rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2.4rem 1.6rem 4.8rem 1.6rem;
  }
`
export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
`
export const Button = styled.button`
  all: unset;
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.white};
`
