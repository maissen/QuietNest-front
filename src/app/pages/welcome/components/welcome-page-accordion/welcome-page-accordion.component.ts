import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-page-accordion',
  templateUrl: './welcome-page-accordion.component.html',
  styleUrls: ['./welcome-page-accordion.component.scss']
})
export class WelcomePageAccordionComponent {
  @Input() items: { title: string; content: string }[] = [];
  openIndex: number | null = null;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
