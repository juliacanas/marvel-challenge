import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 84px;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 4.8rem;
`
export const FavCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  color: ${({ theme }) => theme.colors.white};
`

export const CountText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`
