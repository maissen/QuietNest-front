import { Component, Input } from '@angular/core';

@Component({
  selector: 'questions-carousel',
  templateUrl: './questions-carousel.component.html',
  styleUrls: ['./questions-carousel.component.scss']
})
export class QuestionsCarouselComponent {
  @Input() data: any[] = [];  // Input data in the form of a 2D array

  currentQuestionIndex: number = 0;  // To track the current question
  selectedOptions: string[] = [];  // Stores selected options for each question
  questionHistory: any[] = [];  // Initialize as an empty array
  selectedOptionsHistory: any[] = [];  // Initialize to store selected options for each question

  ngOnInit() {
    this.loadNextQuestion();  // Initialize the first question
  }

  loadNextQuestion() {
    // If there are still questions left, set the current question
    if (this.currentQuestionIndex < this.data.length) {
      // No need for additional variable since data is already accessed through index
    } else {
      this.currentQuestionIndex = this.data.length;  // End the flow if no more questions
    }
  }

  selectOption(option: string) {
    const optionIndex = this.selectedOptions.indexOf(option);  // Toggle selection of the option

    if (optionIndex === -1) {
      this.selectedOptions.push(option);  // Add to selection if not already selected
    } else {
      this.selectedOptions.splice(optionIndex, 1);  // Remove from selection if already selected
    }
  }

  nextQuestion() {
    if (this.selectedOptions.length > 0) {
      // Add the current question and its selected options to the history
      this.questionHistory.push([this.data[this.currentQuestionIndex].id, [...this.selectedOptions]]);

      // Store selected options in history
      this.selectedOptionsHistory.push({
        question: this.data[this.currentQuestionIndex].id,
        options: [...this.selectedOptions]
      });

      // Check if the current selected option has a follow-up question
      const selectedOption = this.selectedOptions[0];  // Assuming first selected option leads to follow-up

      const nextQuestionId = this.getNextQuestionId(selectedOption);  // Find the next question id
      if (nextQuestionId) {
        // Find the index of the next question in the data array
        const nextQuestionIndex = this.data.findIndex(q => q.id === nextQuestionId);
        if (nextQuestionIndex !== -1) {
          this.currentQuestionIndex = nextQuestionIndex;  // Move to the next question based on follow-up
        }
      } else {
        this.currentQuestionIndex++;  // Move to the next question
      }

      // Clear selected options for the next question
      this.selectedOptions = [];
      this.loadNextQuestion();  // Load the next question
    }
  }

  getNextQuestionId(selectedOption: string): string | null {
    // Search the data for the selected option's next question
    for (let question of this.data) {
      const option = question.options.find((opt: { label: string; }) => opt.label === selectedOption);
      if (option && option.next) {
        return option.next;  // Return the next question id
      }
    }
    return null;  // No follow-up question found
  }

  skipAll() {
    this.currentQuestionIndex = this.data.length;  // End the question flow
    this.selectedOptions = [];  // Clear all selected options
  }
}
