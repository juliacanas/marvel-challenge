interface Image {
  path: string
  extension: string
}
interface Url {
  type: string
  url: string
}
interface ResourceList {
  available: number
  returned: number
  collectionURI: string
  items: []
}
export interface ComicDto {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: string
  modified: Date
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects: {
    type: string
    language: string
    text: string
  }[]
  resourceURI: string
  urls: Url[]
  variants: []
  collections: []
  collectedIssues: []
  dates: {
    type: string
    date: string
  }[]
  prices: []
  thumbnail: Image
  images: Image[]
  creators: ResourceList
  characters: ResourceList
  stories: ResourceList
  events: ResourceList
}
