export interface CharacterDto {
  id: number
  name: string
  description: string
  modified: Date
  resourceURI: string
  urls: string[]
  thumbnail: {
    path: string
    extension: string
  }
  comics: unknown[] // TO-DO
  stories: unknown[]
  events: Event[]
}
