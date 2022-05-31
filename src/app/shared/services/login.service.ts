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

  public saveData(key: string, value: string) {
    return sessionStorage.setItem(key, value);
  }

  public getData(value: string) {
    return localStorage.getItem(value);
  }

  public register(usuario: any){
    return this.http.post<any>(this.URL + '/register', usuario)
  }

  public editUsuario(usuario: Usuario){
    return this.http.put<any>(this.URL + '/usuarios/' + usuario.email, usuario)
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
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }

  public getUsuario(correo: string | null) {
    return this.http.get<Usuario>(this.URL + '/usuarios/' + correo)
  }

  public getUsuarios() {
    return this.http.get<Usuario[]>(this.URL + '/usuarios')
  }

  public getPc(id: string) {
    return this.http.get<Pc>(this.URL + '/pcs/' + id)
  }

  public getPcs() {
    return this.http.get<Pc>(this.URL + '/pcs')
  }

  public getComponente(tipo: string) {
    return this.http.get<Componente[]>(this.URL + '/componentes/' + tipo)
  }

  public getComponentes() {
    return this.http.get<Componente[]>(this.URL + '/componentes')
  }

  public addComponente (componente: Componente){
    return this.http.post<Componente>(this.URL + '/componentes/', componente)
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
