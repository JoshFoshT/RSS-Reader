import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}

  clicked = false; 
  handleClick(){
    this.clicked = true;
  }
Joshua:number[] = [10,11,12,13,14,15];
ParserTitle:string = "asdofij";


}

