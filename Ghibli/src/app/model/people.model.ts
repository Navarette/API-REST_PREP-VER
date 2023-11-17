import { Film } from "./film.model"
import { Species } from "./species.model"

export interface People {
    id: string
    name: string
    gender: string
    age: string
    eye_color: string
    hair_color: string
    films: Film[]
    species: Species[]
    url: string
}
