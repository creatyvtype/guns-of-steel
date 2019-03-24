import { createContext } from 'react';
import { observable } from 'mobx';
import { RootStore } from './RootStore';

export type WorkoutDay = 'a' | 'b';

export interface WorkoutHistory {
    [key: string]: Array<{
        exercise: string;
        value: number;
    }>;
}

interface CurrentExercise {
    weight: number;
    reps: number;
    numSets: number;
    sets: string[];
    exercise: string;
}

export class WorkoutStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }
    @observable currentSquat: number;
    @observable currentBenchPress: number;
    @observable currentOverheadPress: number;
    @observable currentDeadlift: number;
    @observable currentBarbellRow: number;

    @observable lastWorkoutType: WorkoutDay;

    @observable currentExercises: CurrentExercise[] = [];

    @observable history: WorkoutHistory;
}
