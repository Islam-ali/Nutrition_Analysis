import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-calculation',
  templateUrl: './result-calculation.component.html',
  styleUrls: ['./result-calculation.component.scss']
})
export class ResultCalculationComponent implements OnInit {
  @Input() result:any;
  constructor() { }

  ngOnInit(): void {
  }

}
