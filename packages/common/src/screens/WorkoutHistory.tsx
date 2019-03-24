import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../stores/RootStore';

export interface Props {}

export const WorkoutHistory: React.FC<Props> = observer(() => {
    const rootStore = useContext(RootStoreContext);
    return (
        <View>
            <Text>Workout History Page</Text>
            <Button
                title="Create Workout"
                onPress={() => {
                    rootStore.workoutStore.currentExercises.push({
                        exercise: 'Squat',
                        numSets: 5,
                        reps: 5,
                        sets: ['', '', '', '', ''],
                        weight: 260,
                    },{
                        exercise: 'Bench Press',
                        numSets: 5,
                        reps: 5,
                        sets: ['', '', '', '', ''],
                        weight: 200,
                    },{
                        exercise: 'Deadlift',
                        numSets: 1,
                        reps: 5,
                        sets: ['', 'X', 'X', 'X', 'X'],
                        weight: 360,
                    });
                    rootStore.routerStore.screen = 'CurrentWorkout';
                }}
            />
        </View>
    );
});
