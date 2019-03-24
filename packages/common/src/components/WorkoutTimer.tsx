import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        heith: 50,
        width: '100%',
        backgroundColor: '#486550',
    },
    row: {
        paddingHorizontal: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    clearButton: {
        color: '#B2A1A1',
        fontSize: 30,
    },
    timeText: {
        color: '#fff',
        fontSize: 18,
    },
    countdownLine: {
        height: 3,
        backgroundColor: '#B2a1a1',
    },
});

interface WorkoutTimerProps {
    currentTime: string;
    onClear: () => void;
    percent: string;
}

export const WorkoutTimer: React.FC<WorkoutTimerProps> = ({ currentTime, onClear, percent }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.countdownLine, {width: percent }]} />
            <View style={styles.row}>
                <Text style={styles.timeText}>{currentTime}</Text>
                <TouchableOpacity onPress={onClear}>
                    <Text style={styles.clearButton}>x</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
