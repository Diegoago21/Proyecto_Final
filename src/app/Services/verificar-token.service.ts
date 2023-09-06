import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class VerificarTokenService {

  private estaLogueadoSubject = new BehaviorSubject<boolean>(false);
  estaLogueado$ = this.estaLogueadoSubject.asObservable();
  constructor(private jwtHelper: JwtHelperService) { }

  obtenerCedulaUsuario(): string {
    const token = localStorage.getItem('token');
    const decodedToken = this.jwtHelper.decodeToken(token!);
    let cedulaUsuario;
    //const estaLogueado = !!token;
    cedulaUsuario = decodedToken.cedula;
    //this.estaLogueadoSubject.next(estaLogueado);
    return cedulaUsuario;
  }

}
