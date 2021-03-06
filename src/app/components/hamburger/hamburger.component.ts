import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css'],
})
export class HamburgerComponent implements OnInit {
  isClicked = false;
  constructor() {}

  ngOnInit(): void {}

  onClick(event: any): void {
    this.isClicked = !this.isClicked;
  }
}
