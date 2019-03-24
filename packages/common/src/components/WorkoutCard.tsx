import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, ViewStyle } from 'react-native';
import { observer } from 'mobx-react-lite';

export interface WorkoutCardProps {
    exercise: string;
    repsAndWeight: string;
    sets: string[];
    onSetPress: (index: number) => void;
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: 'column',
        padding: 10,
        marginBottom: 10,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topRowText: {
        fontSize: 16,
    },
    bottomRow: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    circle: {
        borderRadius: 150,
        backgroundColor: '#8fb299',
        padding: 10,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    grayCircle: {
        backgroundColor: 'gray',
    },
    circleText: {
        color: '#fff',
        fontSize: 16,
    },
});

export const WorkoutCard: React.FC<WorkoutCardProps> = observer(
    ({ exercise, repsAndWeight, sets, onSetPress }) => {
        return (
            <View style={styles.card}>
                <View style={styles.topRow}>
                    <Text style={styles.topRowText}>{exercise}</Text>
                    <Text style={styles.topRowText}>{repsAndWeight}</Text>
                </View>
                <View style={styles.bottomRow}>
                    {sets.map((set, index) => {
                        const circleStyle: ViewStyle[] = [styles.circle];
                        if (['X', ''].includes(set)) {
                            circleStyle.push(styles.grayCircle);
                        }
                        // should split it out so X is not Touchable
                        return (
                            <TouchableOpacity onPress={() => onSetPress(index)} style={circleStyle} key={set + index}>
                                <Text style={styles.circleText}>{set}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    }
);
