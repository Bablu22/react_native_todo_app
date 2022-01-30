import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Footer = ({ addtodo, setInput, textInput }) => {
    return (
        <View style={styles.footer}>
            <View style={styles.inputContainer}>
                <TextInput
                    value={textInput}
                    placeholder="Add Todo"
                    onChangeText={text => setInput(text)}
                />
            </View>
            <TouchableOpacity onPress={addtodo}>
                <View style={styles.iconContainer}>
                    <Icon name="add" color="white" size={30} />
                </View>
            </TouchableOpacity>
        </View>
    );
};



export default Footer;


const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'tomato',
    }, inputContainer: {
        paddingHorizontal: 20,
        elevation: 40,
        backgroundColor: 'white',
        flex: 1,
        marginVertical: 20,
        marginRight: 20,
        borderRadius: 25,
        padding: 10,
    },
    iconContainer: {
        height: 50,
        width: 50,
        backgroundColor: 'black',
        elevation: 40,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
});