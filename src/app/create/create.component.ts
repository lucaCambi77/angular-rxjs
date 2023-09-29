import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {TutorialState} from "../../store/state/state";
import {postTutorial} from "../../store/action/action";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private store: Store<TutorialState>) {
  }

  addTutorial(name: string, url: string) {
    this.store.dispatch(postTutorial({tutorial: {name: name, url: url}}))
  }
}
