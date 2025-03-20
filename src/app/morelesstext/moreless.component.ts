import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moreless',
  standalone: false,
  templateUrl: './moreless.component.html',
  styleUrl: './moreless.component.css'
})
export class MorelessComponent {// tady nepatri OnInit
  @Input() text: string = ''; // default je prazdny retezec
  @Input() wordLimit: number = 100;

  isExpanded: boolean = false;
  truncatedText: string = '';

  ngOnInit() {
    this.truncatedText = this.text.length > this.wordLimit ? this.text.substring(0, this.wordLimit) : this.text;
  }

  toggleText() {
    this.isExpanded = true;
  }
}
