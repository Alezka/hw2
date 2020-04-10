import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ComentModel} from '../../models/ComentModel';


@Injectable({
  providedIn: 'root'
})
export class ComentService {

  constructor(private http: HttpClient) {
  }

  getComents(): Observable<ComentModel[]> {
    return this.http.get<ComentModel[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
