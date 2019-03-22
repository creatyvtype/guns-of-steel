"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
exports.App = function () {
    var _a = React.useState(0), count = _a[0], setCount = _a[1];
    return (React.createElement(react_native_1.View, { style: styles.container },
        React.createElement(react_native_1.Text, { style: styles.welcome }, "Welcome to React Native!"),
        React.createElement(react_native_1.Text, { style: styles.instructions }, "To get started, edit App.tsx"),
        React.createElement(react_native_1.Text, { style: styles.instructions }, count),
        React.createElement(react_native_1.Button, { title: "increment", onPress: function () { return setCount(count + 1); } })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
