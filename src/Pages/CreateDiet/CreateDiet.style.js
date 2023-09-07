import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    titles: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20
    },
    inputs: {
        marginVertical: 5,
        width: '80%',
        borderWidth: 1,
        color: 'black',
        fontSize: 17
    },
    submit: {
        backgroundColor: 'green',
        width: '80%',
        padding: 10,
        margin: 10
    },
    submitText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20

    },
})