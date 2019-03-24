import React from 'react';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { RootStoreContext } from './stores/RootStore';
import { CurrentWorkout } from './screens/CurrentWorkout';
import { WorkoutHistory } from './screens/WorkoutHistory';

export const Router = observer(() => {
    const rootStore = useContext(RootStoreContext)

    return rootStore.routerStore.screen === 'WorkoutHistory' ? <WorkoutHistory /> : <CurrentWorkout />;
});
