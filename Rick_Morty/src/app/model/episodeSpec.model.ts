import { CharacterSpec } from "./characterSpec.model";
export interface EpisodeSpec {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: CharacterSpec[];
    url:        string;
    created:    Date;
}