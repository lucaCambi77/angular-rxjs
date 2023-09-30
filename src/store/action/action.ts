import {createAction, props, Store} from "@ngrx/store";
import {Tutorial} from "../../model/tutorial.model";
import {TutorialState} from "../state/state";

export const postTutorialAction = createAction('[Tutorials] Post Tutorial', props<{ tutorial: Tutorial }>())
export const postTutorialDispatch = (store: Store<TutorialState>, tutorial: Tutorial) => store.dispatch(postTutorialAction({tutorial}))
