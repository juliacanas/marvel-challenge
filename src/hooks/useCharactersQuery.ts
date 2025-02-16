import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { apiClient } from '../services/config'
import { CharacterDto } from '../types/dtos/CharacterDto'
import { CharacterClient } from '../types/client/CharacterClient'
import { mapperCharacterDtoToClient } from '../utils/characterMapper'

export const useCharactersQuery = (search: string) => {
  return useQuery({
    queryKey: ['characters', { nameStartsWith: search || null, limit: 50 }],
    queryFn: async () => {
      const response = await apiClient.get('/characters', {
        params: { nameStartsWith: search || null, limit: 50 },
      })
      return response.data
    },
    select: ({ data: listResponse }) => ({
      results: listResponse.results.map(
        (character: CharacterDto): CharacterClient =>
          mapperCharacterDtoToClient(character),
      ),
      total: listResponse.total || listResponse.results.length,
    }),
    placeholderData: keepPreviousData,
    retry: 1,
  })
}
