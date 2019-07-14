import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Match } from '../interfaces/Match';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  list(): Observable<Match[]> {
    return this.http.get(environment.apiBaseUrl + '/matches')
    .pipe(
      map((res: Match[]) => {
        return res;
      })
    )
  }

  show(id: number): Observable<Match> {
    return this.http.get(environment.apiBaseUrl + '/matches/' + id).pipe(
      map((res: Match) => {
        return res;
      })
    )
  }

}
