import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    delete: {
        alignSelf: 'flex-end',
        fontSize: 20,
        color: 'red',
        marginRight: 20
    },
    description: {
        fontSize: 18,
        color: 'blue'
    },
    degerlerContainer: {
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    degerler: {
        fontSize: 16,
        color: 'green',
    }
})