import {reducer} from "./reducer";
import {postTutorial} from "../action/action";

describe('reducers', () => {

  it('should match initial state', () => {
    let state;
    state = reducer([{name: 'Google', url: 'https://google.com'}], postTutorial);
    expect(state).toEqual([{name: 'Google', url: 'https://google.com'}]);
  });
});
