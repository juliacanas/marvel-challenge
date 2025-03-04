import { useQuery } from '@tanstack/react-query'

import { apiClient } from '../services/config'
import { ComicDto } from '../types/dtos/ComicDto'
import { mapperComicDtoToClient } from '../mappers/comicMapper'
import { COMICS_PAGE_LIMIT } from '../constants'

export const useComicsQuery = (id?: string) => {
  return useQuery({
    queryKey: ['comics', { id, limit: COMICS_PAGE_LIMIT }],
    queryFn: async () => {
      const response = await apiClient.get(`/characters/${id}/comics`, {
        params: { limit: COMICS_PAGE_LIMIT },
      })
      return response.data
    },
    select: ({ data }) => ({
      comics: data.results
        .sort((a: ComicDto, b: ComicDto) => {
          const dateA = new Date(a.dates[0].date)
          const dateB = new Date(b.dates[0].date)
          return dateA.getTime() - dateB.getTime()
        })
        .map((comic: ComicDto) => mapperComicDtoToClient(comic)),
    }),
    retry: 1,
  })
}
