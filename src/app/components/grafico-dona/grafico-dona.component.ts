import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

  @Input('doughnutChartLabels') doughnutChartLabels:Label[]=['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('doughnutChartData') doughnutChartData:MultiDataSet=[[350, 450, 100]]
  @Input('doughnutChartType') doughnutChartType:ChartType='doughnut'
  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100]
  // ];
  // public doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}
