import {Injectable} from '@angular/core';
import {Lore} from '../entities/Lore';
import {HttpClient} from '@angular/common/http';
import {Observable, of, ReplaySubject} from 'rxjs';
// @ts-ignore
import lores from '../../assets/lores.json';
import {Player} from '../entities/Player';

@Injectable({
  providedIn: 'root'
})
export class LoreService {

  constructor(public http: HttpClient) {
  }

  getInitialLore(): Observable<Lore> {
    return of(lores[0] as Lore);
  }

  findLoreForChoice(choice: number): Observable<Lore> {
    if (choice === 0) {
      return of(null);
    } else {
      return of(lores.find(innerLore => innerLore.page === choice) as Lore);
    }
  }
}
