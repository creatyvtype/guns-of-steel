import React from 'react';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { RouterStoreContext } from './stores/RouterStore';
import { CurrentWorkout } from './components/CurrentWorkout';
import { WorkoutHistory } from './components/WorkoutHistory';

export const Router = observer(() => {
    const routerStore = useContext(RouterStoreContext);

    return routerStore.screen === 'WorkoutHistory' ? <WorkoutHistory /> : <CurrentWorkout />;
});