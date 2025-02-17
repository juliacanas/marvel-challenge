import { ComicDto } from './ComicDto'
import { ImageDto } from './ImageDto'

export interface CharacterDto {
  id: number
  name: string
  description: string
  modified: Date
  resourceURI: string
  urls: string[]
  thumbnail: ImageDto
  comics: ComicDto[]
  stories: unknown[]
  events: Event[]
}
