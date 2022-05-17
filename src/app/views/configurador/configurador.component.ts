import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private log: LoginService) { }

  ngOnInit(): void {
    this.pcCustom = this.formBuilder.group({
      gpu: [''],
      cpu: ['', Validators.required],
      ram: ['', Validators.required],
      placa_base: ['', Validators.required],
      almacenamiento: ['', Validators.required],
      ventilacion: [''],
      caja: ['', Validators.required],
      psu: ['', Validators.required]
    });
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
}
