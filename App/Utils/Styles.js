import * as Constants from './Constants'; 
import Colors from "./Colors"; 

export default {
    CommonStyles: {
        full_flex: { flex: 1 },
        centerStyles: { justifyContent: 'center', alignItems: 'center',alignSelf:'center'},
    },
    SplashScreen:{
        ImageStyle: {alignSelf:'center', width:200, height:200},
        Text:{fontSize:22}
    },
    HomeScreen:{

    },
    Header:{
        appHeaderText: {  color:Colors.white ,flex:1, textAlign:'center' ,  fontSize: Constants.AppHeaderTextSize,  fontWeight: 'bold' },
        headerSize: {backgroundColor: Colors.AppTheme ,width:"100%",flexDirection: 'row' ,alignItems:'center', height:50}
    }
}