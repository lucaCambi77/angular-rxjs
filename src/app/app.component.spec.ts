import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ReadComponent} from "./read/read.component";
import {CreateComponent} from "./create/create.component";
import {StoreModule} from "@ngrx/store";
import {initialState, reducer} from "../store/reducer/reducer";
import {Tutorial} from "../model/tutorial.model";

describe('AppComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
        declarations: [AppComponent, ReadComponent, CreateComponent],
        imports: [
            StoreModule.forRoot({tutorial: reducer})
        ]
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'angular-rxjs'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('angular-rxjs');
    });

    it(`should match tutorial initial state'`, () => {
        const fixture = TestBed.createComponent(ReadComponent);
        const app = fixture.componentInstance;
        let actual: Tutorial[] = []
        app.tutorials.subscribe(tutorial => actual = tutorial)
        expect(actual.length).toEqual(1);
        expect(actual).toEqual([initialState]);
    });

    it(`should dispatch a tutorial'`, () => {
        const readComponentComponentFixture = TestBed.createComponent(ReadComponent);
        const createComponentComponentFixture = TestBed.createComponent(CreateComponent);
        const readComponent = readComponentComponentFixture.componentInstance;
        const createComponent = createComponentComponentFixture.componentInstance;
        createComponent.addTutorial('Test', 'http://localhost:8080')

        let actual: Tutorial[] = []
        readComponent.tutorials.subscribe(tutorial => actual = tutorial)

        expect(actual.length).toEqual(2);
        expect(actual).toEqual([initialState, {name: 'Test', url: 'http://localhost:8080'}]);
    });
});
