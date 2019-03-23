import * as React from 'react';
import { View } from 'react-native';
import { WorkoutCard } from '../components/WorkoutCard';

export interface CurrentWorkoutProps {

}

import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fafafa",
        margin: 10
    }
});

export const CurrentWorkout: React.FC<CurrentWorkoutProps> = () => {
    return (
        <View style={styles.container}>
            <WorkoutCard sets={[
                "5",
                "5",
                "5",
                "",
                "X",                
            ]} exercise="Squat" repsAndWeight="5x5 260"/>
        </View>
    );
}