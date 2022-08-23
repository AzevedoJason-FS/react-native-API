import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    nav: {
        backgroundColor: '#1abc9c',
    },

    homeContainer: {
        marginTop: 16,
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: "white",
        borderRadius: '5px',
        color: "#20232a",
        fontSize: 30,
        width: '80%',
        fontWeight: "bold",
        padding: 30
    },

    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '700'
    },

    p: {
        marginTop: 20
    },

    tinyLogo: {
        width: 20,
        height: 20,
    
    },

    socialBox: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 20,
        marginBottom: 20
    },

    socialTitle: {
        marginLeft: 5,
        fontWeight: '700'
    },

    listTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 20,
        textAlign: 'center'
    },

    input: {
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.08)',
        padding: 10    
    },

    largeHeading: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center'
    },
    
    formContainer: {
        marginTop: 40
    }

  });

  export default styles;