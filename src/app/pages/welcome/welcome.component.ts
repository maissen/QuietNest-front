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
    { 
      title: 'What is Quiet Rest about', 
      content: 'This app is designed to help you reduce stress, anxiety, and improve your overall well-being. With a wide variety of guided speeches by specialists, calming nature sounds, and customizable audio settings, you can create your perfect relaxation environment, whether you’re trying to sleep better, focus, or relax.'
    },
    { 
      title: 'How can I customize my sound experience', 
      content: "You can easily mix and match different nature sounds, such as birds, campfires, rivers, and more. Simply choose the sounds you like, and adjust their volumes to suit your preferences. You can also add a narration or specialist's speech and modify the volume of that as well to create the ideal atmosphere."
    },
    { 
      title: 'Are the speeches guided by professionals', 
      content: "Yes! Quiet Rest features speeches and sessions led by specialists in mental health, sleep improvement, stress management, and relaxation techniques. These professionals will guide you through different exercises and offer tips to help you feel more at ease."
    },
    { 
      title: 'Can I use the app without an internet connection', 
      content: "Some features, such as streaming nature sounds and speech sessions, require an internet connection. However, you will be able to use offline features such as listening to downloaded content if available."
    },
    { 
      title: 'Is the app free', 
      content: "Yes, Quiet Rest is completely free! You can enjoy all the features, including a wide variety of speeches and nature sounds, without any limitations. We believe in providing a stress-free experience without requiring any subscriptions."
    },
    { 
      title: 'How do I contact support if I have an issue', 
      content: `If you encounter any problems or have any questions, you can contact me through the app's "Contact me section" section, or you can email me directly at maissen.developer500@gmail.com\nI'm here to assist you!`
    },
    { 
      title: 'Can I request new content or sounds to be added', 
      content: `Yes, I love hearing from my users! If you have a suggestion for new sounds or speeches, feel free to submit your idea through the "Contact Me" section in the app. I'm always looking to expand my offerings to make your experience better.`
    },
  ];
}
