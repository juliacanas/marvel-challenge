import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 96rem;
  width: 100%;
  gap: 2.4rem;
  padding: 4.8rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4.8rem 0 4.8rem 4.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4.8rem 0 4.8rem 1.6rem;
  }
`

export const Section = styled.div`
  display: flex;
  justify-content: center;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontSize.bold};
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
`

export const ComicsList = styled.div`
  display: flex;
  gap: 1.6rem;
  overflow-x: auto;
  max-width: 96rem;
  white-space: nowrap;
  padding-bottom: 2.4rem;

  &::-webkit-scrollbar {
    height: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.red};
    border-radius: 0;
    height: 0.4rem;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGray};
    height: 0.4rem;
  }
`

export const ComicsCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 18rem;
`

export const ComicImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1.2rem;
`

export const ComicName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontSize.semibold};
  margin-bottom: 0.8rem;
  overflow-wrap: break-word;
  white-space: normal;
`

export const ComicYear = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontSize.regular};
`
