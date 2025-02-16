import { CharacterClient } from '../types/client/CharacterClient'
import { CharacterDto } from '../types/dtos/CharacterDto'

export const mapperCharacterDtoToClient = (
  character: CharacterDto,
): CharacterClient => ({
  id: character.id,
  name: character.name,
  thumbnail: {
    path: character.thumbnail.path,
    extension: character.thumbnail.extension,
  },
})
