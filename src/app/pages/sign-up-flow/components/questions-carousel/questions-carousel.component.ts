import { Component, Input } from '@angular/core';

@Component({
  selector: 'questions-carousel',
  templateUrl: './questions-carousel.component.html',
  styleUrls: ['./questions-carousel.component.scss']
})
export class QuestionsCarouselComponent {
  @Input() data: any[] = [];

  currentQuestion: any;
  questionHistory: any[][] = [];
  selectedOptions: string[] = [];  //? for each question

  ngOnInit() {
    this.currentQuestion = this.data[0];
  }

  selectOption(option: any) {
    const optionIndex = this.selectedOptions.indexOf(option.label); //? Toggle selection of the option

    if (optionIndex === -1) {
      this.selectedOptions.push(option.label);  //? Add to selection if not already selected
    } else {
      this.selectedOptions.splice(optionIndex, 1);  //? Remove from selection if already selected
    }
  }

  nextQuestion() {
    if (this.selectedOptions.length > 0) {

      //? Add the current question and its selected options to the history as a list
      this.questionHistory.push([this.currentQuestion.question, [...this.selectedOptions]]);

      if (this.currentQuestion) {
        //? Check if the current selected option has a follow-up question
        const selectedOption = this.currentQuestion.options.find((opt: any) =>
          this.selectedOptions.includes(opt.label)
        );

        if (selectedOption?.followUp) {
          this.currentQuestion = selectedOption.followUp[0];  //? Move to the follow-up question
        } else {
          this.currentQuestion = null;  //? End the flow if no follow-up exists
        }
      }

      //? Clear selected options for the next question
      this.selectedOptions = [];
    }

    console.log(this.questionHistory)
  }

  skipAll() {
    this.currentQuestion = null; //? End the question flow
    this.selectedOptions = [];  //? Clear all selected options
  }
}
