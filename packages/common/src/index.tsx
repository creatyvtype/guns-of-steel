import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { observer } from 'mobx-react-lite';
import { CounterStoreContext } from './stores/CounterStore';
import { Router } from './Router';

export const App = observer(() => {
    const counterStore = useContext(CounterStoreContext);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Router />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
    },
    wrapper: {
        backgroundColor: '#F5FCFF',
        width: "100%",
        maxWidth: 425,
        flex: 1
    }
}));
