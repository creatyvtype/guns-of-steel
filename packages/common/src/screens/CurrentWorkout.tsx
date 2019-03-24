import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';

import { RootStoreContext } from '../stores/RootStore';
import { WorkoutCard } from '../components/WorkoutCard';
import { WorkoutTimer } from '../components/WorkoutTimer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 10,
    },
});
interface CurrentWorkoutProps {}

export const CurrentWorkout: React.FC<CurrentWorkoutProps> = observer(() => {
    const rootStore = React.useContext(RootStoreContext);
    React.useEffect(() => {
        return () => {
            rootStore.workoutTimerStore.stopTimer();
        }
    }, [])
    return (
        <View style={styles.container}>
            {rootStore.workoutStore.currentExercises.map(e => (
                <WorkoutCard
                    onSetPress={setIndex => {
                        rootStore.workoutTimerStore.startTimer();
                        const value = e.sets[setIndex];
                        let newValue: string;

                        if (value === '') {
                            newValue = `${e.reps}`;
                        } else if (value === '0') {
                            newValue = '';
                            rootStore.workoutTimerStore.stopTimer();
                        } else {
                            newValue = `${parseInt(value) - 1}`;
                        }
                        e.sets[setIndex] = newValue;
                    }}
                    key={e.exercise}
                    sets={e.sets}
                    exercise={e.exercise}
                    repsAndWeight={`${e.reps}x${e.numSets} ${e.weight}`}
                />
            ))}
            {rootStore.workoutTimerStore.isRunning && (
                <WorkoutTimer
                    currentTime={rootStore.workoutTimerStore.display}
                    onClear={() => rootStore.workoutTimerStore.stopTimer()}
                    percent={rootStore.workoutTimerStore.percent}
                />
            )}
        </View>
    );
});
