import { CharacterSpec } from "./characterSpec.model";
export interface LocationSpec {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: CharacterSpec[];
    url: string;
    created: Date;
}