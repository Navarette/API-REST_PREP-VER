import { Film } from "./film.model"
import { People } from "./people.model"

export interface Species {
    id: string
    name: string
    classification: string
    eye_colors: string
    hair_colors: string
    people: People[]
    films: Film[]
    url: string
}