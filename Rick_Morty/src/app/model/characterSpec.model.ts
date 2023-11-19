import { EpisodeResult } from "./episode.model";
export interface CharacterSpec {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: string;
    episode: EpisodeResult[];
    url: string;
    created: Date;
}

export interface Location {
    name: string;
    url: string;
}