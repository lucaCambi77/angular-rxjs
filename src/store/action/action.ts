import {createAction, props} from "@ngrx/store";
import {Tutorial} from "../../model/tutorial.model";

export const postTutorial = createAction('[Tutorials] Post Tutorial', props<{ tutorial: Tutorial }>())
