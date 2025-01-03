import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions-flow.service';

@Component({
  selector: 'app-sign-up-flow',
  templateUrl: './sign-up-flow.component.html',
  styleUrls: ['./sign-up-flow.component.scss']
})
export class SignUpFlowComponent implements OnInit {
  questionsFlow: any[] = [];

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.fetchQuestions();
  }

  fetchQuestions(): void {
    this.questionsService.getQuestions().subscribe(
      (data) => {
        this.questionsFlow = data;
        console.log("data is fetched")
        // console.log(Object.keys(data));
        console.log(data)
      },
      (error) => {
        console.error('Error fetching questions:', error);
      }
    );
  }

  getQuestionsFlow() {
    return this.questionsFlow;
  }
}
