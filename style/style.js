import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      img: {
        width: 300,
        height: 200,
      },
      iconmenu: {
        width: 30,
        height: 30,
        top: 15
      },
      menu:{
        position: 'absolute',
        borderWidth: 4,
        borderColor: 'gray',
        width: '102%',
        height: 70,
        bottom: -2,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        gap: 80,
    },
    touchaslamn: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    }, 
    areaTexto:{
      borderWidth: 2,
      height: 50,
      width: 250,
      padding: 5,
      margin: 10,
    },
    butao:{
    },
});