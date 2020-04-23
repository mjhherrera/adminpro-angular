import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-graficas-dona',
  templateUrl: './graficas-dona.component.html',
  styles: [
  ]
})
export class GraficasDonaComponent implements OnInit {

   @Input('chartLabels') doughnutChartLabels:string [] = [];
    @Input('chartData') doughnutChartData : number[] = [];
   @Input('chartType') doughnutChartType = "";


  constructor() {
   }

  ngOnInit(): void {
  }

}
