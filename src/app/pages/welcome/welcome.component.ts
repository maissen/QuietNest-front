import { Component, ViewChild, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('itemsContainer', { static: false }) itemsContainer!: ElementRef;
  @ViewChild('headerElement', { static: true }) headerElement!: ElementRef;
  elementHeight = 0;

  ngOnInit(): void {
    this.updateElementHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateElementHeight();
  }

  updateElementHeight(): void {
    if (this.headerElement) {
      this.elementHeight = this.headerElement.nativeElement.offsetHeight;
    }
  }

  scrollLeft() {
    if (this.itemsContainer) {
      this.itemsContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  scrollRight() {
    if (this.itemsContainer) {
      this.itemsContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  feedbackList = [
    { text: "When I cannot fall asleep, I turn on this app and am out within 5 minutes.", username: "Eya Yahyaoui", stars: 4 },
    { text: "I love the calming sounds. Helps me relax after work.", username: "Maissen Belgacem", stars: 5 },
    { text: "Really effective for meditation and focus.", username: "User123", stars: 4 },
    { text: "Best app for relaxation. Highly recommend!", username: "Jane Doe", stars: 5 },
    { text: "Helps me sleep instantly. Great work!", username: "John Smith", stars: 4 }
  ];

  accordionData = [
    { title: 'Section 1', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id obcaecati ea non, rerum consectetur fugiat tempore ratione maiores deserunt eos corrupti cupiditate distinctio labore quaerat dolorum numquam nobis nostrum. Aspernatur.' },
    { title: 'Section 2', content: 'Content for Section 2' },
    { title: 'Section 3', content: 'Content for Section 3' }
  ];
}
