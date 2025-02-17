import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { apiClient } from '../services/config'
import { CharacterDto } from '../types/dtos/CharacterDto'
import { CharacterClient } from '../types/client/CharacterClient'
import { mapperCharacterDtoToClient } from '../mappers/characterMapper'
import { CHARACTER_PAGE_LIMIT, CHARACTERS } from '../constants'

export const useCharactersQuery = (search: string) => {
  return useQuery({
    queryKey: [
      CHARACTERS,
      { nameStartsWith: search || null, limit: CHARACTER_PAGE_LIMIT },
    ],
    queryFn: async () => {
      const response = await apiClient.get('/characters', {
        params: { nameStartsWith: search || null, limit: CHARACTER_PAGE_LIMIT },
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
