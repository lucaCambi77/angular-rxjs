import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {TutorialState} from "../../store/state/state";
import {postTutorialDispatch} from "../../store/action/action";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private store: Store<TutorialState>) {
  }

  addTutorial(name: string, url: string) {
    postTutorialDispatch(this.store, {name: name, url: url})
  }
}
