import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moreless',
  standalone: false,
  templateUrl: './moreless.component.html',
  styleUrl: './moreless.component.css'
})
export class MorelessComponent implements OnInit {
  @Input() text!: string;
  @Input() wordLimit!: number;
  showMore: boolean;
  constructor() {
    this.showMore = false;
   }

  ngOnInit(): void {

  }
}
