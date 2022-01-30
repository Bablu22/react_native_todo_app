import React from 'react';
import { Box, Center, Container, Heading } from 'native-base';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Header = () => {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.heading}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 22,

                        }}>
                        TODO APP
                    </Text>
                    <Icon name="add-task" size={25} color="green" />
                </View>
                
            </View>
        </SafeAreaView>
    );
};




const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        width: '100%'

    },
    heading: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default Header;


