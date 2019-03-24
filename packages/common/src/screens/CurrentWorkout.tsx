import * as React from 'react';
import { View } from 'react-native';
import { WorkoutCard } from '../components/WorkoutCard';

import { StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../stores/RootStore';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 10,
    },
});
export interface CurrentWorkoutProps {}

export const CurrentWorkout: React.FC<CurrentWorkoutProps> = observer(() => {
    const rootStore = React.useContext(RootStoreContext);
    return (
        <View style={styles.container}>
            {rootStore.workoutStore.currentExercises.map(e => (
                <WorkoutCard
                    onSetPress={setIndex => {
                        const value = e.sets[setIndex];
                        let newValue: string;

                        if (value === '') {
                            newValue = `${e.reps}`;
                        } else if (value === '0') {
                            newValue = '';
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
        </View>
    );
});
