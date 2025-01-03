import { Component } from '@angular/core';
import { questionsFlow } from 'src/app/data/questionsFlow';

@Component({
  selector: 'app-sign-up-flow',
  templateUrl: './sign-up-flow.component.html',
  styleUrls: ['./sign-up-flow.component.scss']
})
export class SignUpFlowComponent {
  questionsFlow: any[] = questionsFlow;
}
