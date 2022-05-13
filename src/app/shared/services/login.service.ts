import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente, Pc, Usuario } from '../interfaces/modelos';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient, private router: Router) { }

  public register(usuario: any){
    return this.http.post<any>(this.URL + '/register', usuario)
  }

  public logIn(usuario: any){
    return this.http.post<any>(this.URL + '/login', usuario)
  }

  public loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public getUsuario(id: string) {
    return this.http.get<Usuario>(this.URL + '/usuarios' + id)
  }

  public getUsuarios() {
    return this.http.get<Usuario>(this.URL + '/usuarios')
  }

  public getPc(id: string) {
    return this.http.get<Pc>(this.URL + '/pcs' + id)
  }

  public getPcs() {
    return this.http.get<Pc>(this.URL + '/pcs')
  }

  public getComponente(id: string) {
    return this.http.get<Componente>(this.URL + '/componentes' + id)
  }

  public getComponentes() {
    return this.http.get<Componente>(this.URL + '/componentes')
  }

  public addComponente (componente: Componente){
    return this.http.post<Componente>(this.URL + '/componentes', componente)
  }

  public addPc(pc: Pc){
    return this.http.post<Pc>(this.URL + '/pc/', pc)
  }

  public deletePc(id: string){
    return this.http.delete<Pc>(this.URL + '/pc/ ' + id)
  }

  public deleteComponente(id: string){
    return this.http.delete<Componente>(this.URL + '/componente/ ' + id)
  }
  
  public deleteUsuario(id: string){
    return this.http.delete<Usuario>(this.URL + id)
  }
}
