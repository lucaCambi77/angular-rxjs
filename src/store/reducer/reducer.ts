import {Tutorial} from "../../model/tutorial.model";
import {createReducer, on} from "@ngrx/store";
import {postTutorialAction} from "../action/action";

export const initialState: Tutorial = {
  name: 'Google',
  url: 'https://google.com'
}

export const reducer = createReducer([initialState], on(postTutorialAction, (state, action) => {
    return [
      ...state,
      action.tutorial
    ];
  })
)
