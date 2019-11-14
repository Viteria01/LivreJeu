import {Choice} from './Choice';
import {Item} from './Item';

export interface Lore {
  page: number;
  content: string;
  listOfChoices?: Choice[];
  items?: Item[];
}
