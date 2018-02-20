import React from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';

const ExampleComponent = (props) => {
    return (
        <View>
            <Text style={styles.text}>This is an example component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 22
    }
});

export default ExampleComponent;
