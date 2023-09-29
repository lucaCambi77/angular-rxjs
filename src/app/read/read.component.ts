import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Tutorial} from "../../model/tutorial.model";
import {select, Store} from "@ngrx/store";
import {tutorialSelector} from "../../store/selector/selector";
import {TutorialState} from "../../store/state/state";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {

  tutorials: Observable<Tutorial[]>

  constructor(store: Store<TutorialState>) {
    this.tutorials = store.pipe(select(tutorialSelector))
  }

}
