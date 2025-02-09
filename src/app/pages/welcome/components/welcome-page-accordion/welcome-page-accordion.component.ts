import { Component, Input, AfterViewInit, ViewChildren, QueryList, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-welcome-page-accordion',
  templateUrl: './welcome-page-accordion.component.html',
  styleUrls: ['./welcome-page-accordion.component.scss']
})
export class WelcomePageAccordionComponent implements AfterViewInit {
  @Input() items: { title: string; content: string }[] = [];
  openIndex: number | null = null;

  @ViewChildren('accordionContent') accordionContents!: QueryList<ElementRef>;

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
    this.updateHeights();
  }

  ngAfterViewInit() {
    this.updateHeights();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateHeights();
  }

  private updateHeights() {
    this.accordionContents.forEach((content, index) => {
      const element = content.nativeElement;
      if (this.openIndex === index) {
        element.style.height = element.scrollHeight + 'px';
      } else {
        element.style.height = '0px';
      }
    });
  }
}
