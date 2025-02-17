import { useQuery } from '@tanstack/react-query'
import { apiClient } from '../services/config'

export const useCharacterDetailQuery = (id?: string) => {
  return useQuery({
    queryKey: ['detail', id],
    queryFn: async () => {
      const response = await apiClient.get(`/characters/${id}`)
      return response.data.data.results[0]
    },
    select: (data) => ({
      name: data.name,
      description: data.description,
      thumbnail: `${data.thumbnail.path}.${data.thumbnail.extension}`,
    }),
    retry: 1,
  })
}
