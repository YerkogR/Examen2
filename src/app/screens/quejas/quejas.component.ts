import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent implements OnInit {

  opinion = new FormGroup({
    nombre : new FormControl('', Validators.required),
    pais : new FormControl('', Validators.required),
    observacion : new FormControl('', Validators.required)
  })
  
  mensaje:any;
  form :any; 

  constructor() { } 

  ngOnInit(): void {

  }

  onSubmit(){
    this.mensaje = document.getElementById('mensaje');
    this.form = document.getElementById('form');

    if(this.opinion.get('nombre')?.value == false || this.opinion.get('pais')?.value == false || this.opinion.get('observacion')?.value == false){
      alert('Complete todos los campos');
    }else{
     this.form.style.display = 'none';
     this.mensaje.style.display = 'block';
    }
  }
}
