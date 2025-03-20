import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-moreless',
  standalone: false,
  templateUrl: './moreless.component.html',
  styleUrl: './moreless.component.css'
})
export class MorelessComponent {// tady nepatri OnInit
  @Input() text: string = '';
  @Input() maxLength: number = 100;

  isExpanded: boolean = false;
  truncatedText: string = '';

  ngOnInit() {
    this.updateTruncatedText();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
      // If the text changes, reset everything
      this.updateTruncatedText();
      this.isExpanded = false; // Reset the expansion state
    }
  }

  updateTruncatedText() {
    this.truncatedText = this.text.length > this.maxLength ? this.text.substring(0, this.maxLength) : this.text;
  }

  toggleText() {
    this.isExpanded = !this.isExpanded;
  }
}
