import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda:string='Leyenda';
  @Input() progreso:number=50;
  constructor() { }

  ngOnInit() {
    console.log(`Leyenda ${this.leyenda}`);
    console.log(`Progreso ${this.progreso}`);
    
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
