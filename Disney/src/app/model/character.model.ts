export interface Character {
  info: Info
  data: Data[]
}

export interface Info {
  count: number
  totalPages: number
  previousPage: any
  nextPage: any
}

export interface Data {
  _id: number
  films: string[]
  shortFilms: string[]
  tvShows: string[]
  videoGames: string[]
  parkAttractions: string[]
  allies: any[]
  enemies: any[]
  sourceUrl: string
  name: string
  imageUrl: string
  createdAt: string
  updatedAt: string
  url: string
  __v: number
}
