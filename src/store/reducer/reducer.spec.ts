import {reducer} from "./reducer";
import {postTutorialAction} from "../action/action";

describe('reducers', () => {

  it('should match initial state', () => {
    const state = reducer([{name: 'Google', url: 'https://google.com'}], postTutorialAction);
    expect(state).toEqual([{name: 'Google', url: 'https://google.com'}]);
  });
});
