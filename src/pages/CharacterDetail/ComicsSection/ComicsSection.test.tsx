import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'

import { ComicsSection } from './ComicsSection'
import { ComicsSectionProps } from './ComicsSection.types'
import { renderWithProvider } from '../../../tests/test-utils'

const mockComics: ComicsSectionProps = {
  comics: [
    {
      title: 'Hulk (2008) #53',
      thumbnail:
        'http://i.annihil.us/u/prod/marvel/i/mg/2/00/5ba3bfcc55f5a.jpg',
      year: '2017',
    },
    {
      title: 'Hulk (2008) #54',
      thumbnail:
        'http://i.annihil.us/u/prod/marvel/i/mg/f/00/5ba3c7cd5f1e2.jpg',
      year: '2012',
    },
  ],
}

describe('ComicsSection Component', () => {
  it('should render the comics section title', () => {
    const { getByText } = renderWithProvider(<ComicsSection {...mockComics} />)
    expect(getByText(/Comics/i)).toBeInTheDocument()
  })

  it('should render all comics', () => {
    const { getByText } = renderWithProvider(<ComicsSection {...mockComics} />)
    mockComics.comics.forEach((comic) => {
      expect(getByText(comic.title)).toBeInTheDocument()
      expect(getByText(comic.year.toString())).toBeInTheDocument()
    })
  })

  it('should display comic images', () => {
    renderWithProvider(<ComicsSection {...mockComics} />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(mockComics.comics.length)
    images.forEach((img, index) => {
      expect(img).toHaveAttribute('src', mockComics.comics[index].thumbnail)
      expect(img).toHaveAttribute('alt')
    })
  })
})
