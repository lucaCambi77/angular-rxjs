import {Tutorial} from "../../model/tutorial.model";
import {createReducer, on} from "@ngrx/store";
import {postTutorial} from "../action/action";

export const initialState: Tutorial = {
  name: 'Google',
  url: 'https://google.com'
}

export const reducer = createReducer([initialState], on(postTutorial, (state, action) => {
    return [
      ...state,
      action.tutorial
    ];
  })
)
