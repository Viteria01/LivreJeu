import {Item} from './Item';

export interface Choice {
  page: number;
  label: string;
  items: Item[];
}
