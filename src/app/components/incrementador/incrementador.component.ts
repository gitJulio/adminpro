import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress',{static:true}) txtProgress:ElementRef;
  @Input('nombre') leyenda:string='Leyenda';
  @Input() progreso:number=50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(`Leyenda ${this.leyenda}`);
    console.log(`Progreso ${this.progreso}`);
    
  }

  onChanges(newValue:number){

    // let elementHTML:any=document.getElementsByName('progreso')[0]
    //   console.log(this.txtProgress);
      
    
     if(newValue >=100){
        this.progreso=100
     }else if(newValue <=0){
       this.progreso=0
     }else{
       this.progreso=newValue
     }
    //  elementHTML.value=this.progreso
    this.txtProgress.nativeElement.value=this.progresow
     this.cambioValor.emit(this.progreso)
  }

  cambiarValor(valor){
    console.log("***");
    
    console.log(valor)
    console.log("***");
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
