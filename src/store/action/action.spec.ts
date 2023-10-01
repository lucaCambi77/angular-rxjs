import {TestBed} from "@angular/core/testing";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {TutorialState} from "../state/state";
import {postTutorialAction, postTutorialDispatch} from "./action";

const tutorial = {name: 'website', url: 'http://localhost:8080'}
describe('reducers', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });
  });

  it('should call post tutorial dispatch with tutorial action', () => {
    const mockStore: MockStore<TutorialState> = TestBed.inject(MockStore);
    jest.spyOn(mockStore, 'dispatch')
    postTutorialDispatch(mockStore, tutorial);

    expect(mockStore.dispatch).toHaveBeenCalledWith(postTutorialAction({tutorial: tutorial}));
  });
});


