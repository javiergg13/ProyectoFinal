export class Usuario {
  public nombre: string;
  public contraseña: string;
  public apellidos: string;
  public email: string;
  public contraseñaConfirmacion: string;
  public cp: number;
  public telefono: number;
  public edad: number;

  constructor() {
    this.nombre = '';
    this.contraseña = '';
    this.apellidos = '';
    this.email = '';
    this.contraseñaConfirmacion = '';
    this.cp = 0;
    this.telefono = 0;
    this.edad = 0;
  }
}


