import React, { Component } from 'react'
import { Text, View  } from 'react-native'  
import Styles from "../Utils/Styles";

// This is a custom header component that is used in screens

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={[Styles.Header.headerSize,{}]}>
                <Text style = {Styles.Header.appHeaderText}> {this.props.title}</Text>
            </View>
        )
    }0
}

export default Header;