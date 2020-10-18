import React, { Component } from 'react'
import { Text, View, Image, Alert } from 'react-native' 
import mStyles from '../Utils/Styles'
import Images from '../Utils/Images'

class SplashScreen extends Component{

    constructor(props){
        super(props);
    }

    render(){ 
        return( 
            <View style={[mStyles.CommonStyles.centerStyles,mStyles.CommonStyles.full_flex]}>
                <View style={[ mStyles.full_flex]}>
                    <Image source={Images.Splash_Icon} style={mStyles.SplashScreen.ImageStyle} resizeMode={'contain'}/>
                    <Text style={mStyles.SplashScreen.Text}>React Native Boilerplate</Text>
                </View> 
            </View>
        )
    }

    componentDidMount(){
        // 2 Seconds for splash screen
        setTimeout(()=>{  
            this.props.navigation.navigate('HomeScreen');
        }, 2000)
    }

    componentWillUnmount(){  
    }
}
  
 

export default SplashScreen