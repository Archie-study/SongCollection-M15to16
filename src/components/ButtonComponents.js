import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const ButtonComponents = (props) => {
    return (
        <View style={styles.mainButtonContainer}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity {...props}>
                    <Text style={styles.buttonText}>SEE DETAILS</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainButtonContainer:{
        alignItems: 'baseline'
    },
    buttonContainer:{
        marginTop: 8,
        borderWidth: 1,
        borderRadius: 10,
        padding: 8,
        alignItems: 'center',
        borderColor: '#a6a6bd',
        backgroundColor: '#afcae8',
    },
    buttonText:{
        color: 'white'
    }

})