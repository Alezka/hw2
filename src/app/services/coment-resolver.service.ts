import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ComentService} from './coment.service';
import {ComentModel} from '../../models/ComentModel';

@Injectable({
  providedIn: 'root'
})
export class ComentResolverService implements Resolve<ComentModel[]> {

  constructor(private comentService: ComentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ComentModel[]> {
    return this.comentService.getComents();
  }
}
