import { CharacterResult } from "./character.model"
export interface Episode {
    info: Info
    results: EpisodeResult[]
  }
export interface Info {
    count: number
    pages: number
    next: string
    prev: any
}

export interface EpisodeResult {
    id: number
    name: string[]
    air_date: string
    episode: string
    characters: CharacterResult[]
    url: string
    created: string
}
