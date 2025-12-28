import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppl-list',
  templateUrl: './ppl-list.component.html',
  styleUrls: ['./ppl-list.component.css']
})
export class PplListComponent implements OnInit {

  people = [
    { id: 1, name: 'Sunoo', age: 23, gender: 'Male', mobile: '9876543210' },
    { id: 2, name: 'Jennie', age: 29, gender: 'Female', mobile: '9123456780' },
    { id: 3, name: 'Felix', age: 26, gender: 'Male', mobile: '9988776655' },
    { id: 4, name: 'Yujin', age: 24, gender: 'Female', mobile: '9784756834' },
    { id: 5, name: 'Keonho', age: 20, gender: 'Male', mobile: '9856742550' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
