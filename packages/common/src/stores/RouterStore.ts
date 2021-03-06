import { observable } from 'mobx';
import { createContext } from 'react';
import { RootStore } from './RootStore';

export type Routes = 'WorkoutHistory' | 'CurrentWorkout';

export class RouterStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }
    @observable screen: Routes = 'WorkoutHistory';
}
