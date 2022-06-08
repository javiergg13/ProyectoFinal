import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pc, PcFavorito, Usuario } from 'src/app/shared/interfaces/modelos';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-configurador',
  templateUrl: './configurador.component.html',
  styleUrls: ['./configurador.component.css']
})
export class ConfiguradorComponent implements OnInit {
  disableSelect = new FormControl(false);
  step = 0;
  public pcCustom!: FormGroup
  public gpus: any = [];
  public cpus: any = [];
  public rams: any = [];
  public placas: any = [];
  public almacenamientos: any = [];
  public ventilaciones: any = [];
  public torres: any = [];
  public psus: any = [];
  public newPc!: PcFavorito;
  public usuario!: Usuario;
  public comprobarFormulario: boolean = false;
  public errores: string[] = [];

  constructor(private formBuilder: FormBuilder, private log: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.pcCustom = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      gpu: [''],
      cpu: ['', [Validators.required]],
      ram: ['', Validators.required],
      placa_base: ['', Validators.required],
      almacenamiento: ['', Validators.required],
      ventilacion: [''],
      torre: ['', Validators.required],
      psu: ['', Validators.required]
    });
    this.getGpus();
    this.getVentilaciones();
    this.getAlmacenamientos();
    this.getTorres();
    this.getPlacas();
    this.getPsus();
    this.getRams();
    this.getCpus();
    this.getUsuario();
  }

  crearPc() {
      this.comprobarFormulario = true;
      if(this.pcCustom.valid){
      this.newPc = {
        nombre: this.pcCustom.value.nombre,
        descripcion_propia: this.pcCustom.value.descripcion,
        tipo: "Pc Custom",
        componentes: [this.pcCustom.value.cpu, this.pcCustom.value.psu, 
          this.pcCustom.value.ram, this.pcCustom.value.torre, 
          this.pcCustom.value.almacenamiento, this.pcCustom.value.placa_base],
        precio: 0,
        descripcion: '',
        tdp: 0
      }
      if(this.pcCustom.value.gpu.descripcion != undefined){
        this.newPc.componentes.push(this.pcCustom.value.gpu)
      }
      if(this.pcCustom.value.ventilacion.descripcion != undefined){
        this.newPc.componentes.push(this.pcCustom.value.ventilacion)
      }
      for (let componente of this.newPc.componentes) {
        this.newPc.precio += componente.precio;
        this.newPc.descripcion += componente.descripcion + '<br>';
        if(componente.tdp != undefined && componente.tdp != null){
          this.newPc.tdp += componente.tdp;
        }
      }
    }
    if(this.comprobarCompatibilidad(this.newPc).length === 0){
      this.usuario.pc_favoritos?.push(this.newPc);
      this.log.editUsuario(this.usuario).subscribe(
        res => {
          console.log(this.usuario, res)
          this.router.navigate(['favoritos']);
        },
        err => console.log(err)
      )
    } 
  }

  comprobarCompatibilidad(pc: Pc):string[] {
    let errores: string[] = []
    if(!this.pcCustom.value.placa_base.socket.includes(this.pcCustom.value.cpu.socket)){
       errores.push('La placa base y el procesador elegidos no son compatibles.');
    }
    if(this.pcCustom.value.ventilacion != '' 
    && !this.pcCustom.value.ventilacion.socket.includes(this.pcCustom.value.placa_base.socket)){
      errores.push('La placa base y la ventilación elegidos no son compatibles.');
    }
    if(this.pcCustom.value.placa_base.tipo_ram !== this.pcCustom.value.ram.tecnologia){
      errores.push('La memoria Ram y la placa base elegidas no son compatibles.');
    }
    if(this.pcCustom.value.torre.tamano != 'ATX' && this.pcCustom.value.placa_base.tamano === 'ATX'
    || this.pcCustom.value.torre.tamano === 'micro ATX' && this.pcCustom.value.placa_base.tamano === 'mini ATX'){
      errores.push('La torre y la placa base elegidas no son compatibles.');
    }
    if((pc.tdp + 125) > this.pcCustom.value.psu.potencia){
      errores.push('La fuente de alimentación elegida no tiene la suficiente potencia para soportar los componentes de tu Pc de forma segura.');
    }
    if(errores.length !== 0 ) {
      this.errores = errores;
    } 
    return errores;
  }

  getUsuario() {
    this.log.getUsuario(this.log.getData('email')).subscribe(
      res => {
        console.log(res)
        this.usuario = res;
        this.usuario['pc_favoritos'] = [];
      },
      err => {
        console.log(err)
        this.log.logOut();
        this.router.navigate(['login'])
      }
    )
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  getGpus() {
    this.log.getComponente('gpu').subscribe(
      res => {
        this.gpus = res;
      },
      err => console.log(err)
    )
  }
  
  getCpus() {
    this.log.getComponente('cpu').subscribe(
      res => {
        this.cpus = res;
      },
      err => console.log(err)
    )
  }

  getRams() {
    this.log.getComponente('ram').subscribe(
      res => {
        this.rams = res;
      },
      err => console.log(err)
    )
  }

  getPlacas() {
    this.log.getComponente('placa base').subscribe(
      res => {
        this.placas = res;
      },
      err => console.log(err)
    )
  }

  getAlmacenamientos() {
    this.log.getComponente('almacenamiento').subscribe(
      res => {
        this.almacenamientos = res;
      },
      err => console.log(err)
    )
  }

  getVentilaciones() {
    this.log.getComponente('ventilacion').subscribe(
      res => {
        this.ventilaciones = res;
      },
      err => console.log(err)
    )
  }

  getTorres() {
    this.log.getComponente('torre').subscribe(
      res => {
        this.torres = res;
      },
      err => console.log(err)
    )
  }

  getPsus() {
    this.log.getComponente('psu').subscribe(
      res => {
        this.psus = res;
      },
      err => console.log(err)
    )
  }

}
