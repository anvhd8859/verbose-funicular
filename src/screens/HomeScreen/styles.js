import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: { 
        padding: 20,
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        height: '40%',
        aspectRatio: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#707070',
    }
});

export default styles;
