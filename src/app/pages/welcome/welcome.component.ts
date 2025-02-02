import { HttpClient } from '@angular/common/http';
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
  feedbackList: any[] = [];

  api_get_feedback_list = "https://quietrest-back.onrender.com/api/get-all-feedback";

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.updateElementHeight();

    this.loadFeedbackList();
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


  loadFeedbackList(): void {
    this.http.get<any[]>(this.api_get_feedback_list).subscribe(
      (data) => {
        this.feedbackList = data;
      },
      (error) => {
        console.error("Error fetching feedback list:", error);
      }
    );
  }
  


  accordionData = [
    { title: 'Section 1', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id obcaecati ea non, rerum consectetur fugiat tempore ratione maiores deserunt eos corrupti cupiditate distinctio labore quaerat dolorum numquam nobis nostrum. Aspernatur.' },
    { title: 'Section 2', content: 'Content for Section 2' },
    { title: 'Section 3', content: 'Content for Section 3' }
  ];
}
