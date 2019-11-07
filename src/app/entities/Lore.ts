import {Choice} from './Choice';

export interface Lore {
  page: number;
  content: string;
  listOfChoices?: Choice[];
}
