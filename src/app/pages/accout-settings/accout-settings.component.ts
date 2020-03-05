import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }

  cambiarColor(tema){
      console.log(tema);
      
  }

}
