import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';



import colors from '../styles/colors';
import fonts from '../styles/fonts';



export function Button() {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <Text style={styles.text}>
                Confirmar
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.white, 
        fontSize: 16, 
        fontFamily: fonts.heading
    }
})