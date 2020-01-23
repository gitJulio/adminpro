import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda:string='Leyenda';
  @Input() progreso:number=50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(`Leyenda ${this.leyenda}`);
    console.log(`Progreso ${this.progreso}`);
    
  }

  cambiarValor(valor){
    
    if(valor<0 && (this.progreso>0)){
      this.progreso=this.progreso+valor
      this.cambioValor.emit(this.progreso)
    }
    
    if(valor>0 && (this.progreso<100)){
      this.progreso=this.progreso+valor
      this.cambioValor.emit(this.progreso)
    }
   console.log(this.progreso);
   
    
  }


}
