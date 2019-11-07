import {Injectable} from '@angular/core';
import {Lore} from '../entities/Lore';
import {HttpClient} from '@angular/common/http';
import {Observable, of, ReplaySubject} from 'rxjs';
// @ts-ignore
import lores from '../../assets/lores.json';

@Injectable({
  providedIn: 'root'
})
export class LoreService {

  constructor(public http: HttpClient) {
  }

  getInitialLore(): Observable<Lore> {
    return of(lores[0]);
  }

  findLoreForChoice(lore: Lore, choice: number): Observable<Lore> {
    if (choice === 0) {
      return this.getInitialLore();
    } else {
      const wantedPage = choice === 1 ? lore.firstChoiceRedirectsTo : lore.secondChoiceRedirectsTo;
      return of(lores.find(innerLore => innerLore.page === wantedPage));
    }
  }
}
