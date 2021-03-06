import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    block: {
        padding: 8,
        width: 320,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sightView: {
        height: 160,
        justifyContent: 'flex-end',
        position: 'relative',
    },
    cardView: {
        height: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',    
    },
    seperator: {
        height: 1,
        backgroundColor: '#bac7a7',
    },
    photoImage: {
        width: '100%',
        height: 120,
    },
    more: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll: {
        height:250,
        marginHorizontal: 12,
        marginBottom: 16,
    },
    photo: {
        borderRadius: 16,
        overflow: 'hidden',
        width: 120,
        height: 100,
    },
    info: {
        paddingLeft: 20,
        letterSpacing: 1,
    },
})