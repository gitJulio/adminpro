import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  leyenda:string='Leyenda';
  progreso:number=50;
  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor){
    
    if(valor<0 && (this.progreso>0)){
      this.progreso=this.progreso+valor
    }
    
    if(valor>0 && (this.progreso<100)){
      this.progreso=this.progreso+valor
    }
   console.log(this.progreso);
   
    
  }


}
