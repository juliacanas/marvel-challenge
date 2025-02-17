import { ComicClient } from '../types/client/ComicClient'
import { ComicDto } from '../types/dtos/ComicDto'

export const mapperComicDtoToClient = (comic: ComicDto): ComicClient => ({
  title: comic.title,
  year: new Date(comic.dates[0].date).getFullYear().toString(),
  thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
})
