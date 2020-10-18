import React, { Component } from 'react';
import { View, Text, Alert} from 'react-native';
import Header from '../Components/Header'
import { connect } from "react-redux";
import { SpinnerActions } from "../Actions/SpinnerActions";

class HomeScreen extends Component{

    constructor(props){
        super(props);
    }

    render(){
     
        return(
            <View>
                <Header title="Home Screen"/>
                <View>
                    <Text> Spinner Visibility:  { ""+this.props.LoadingSpinner.Spinner_Visibility}  </Text>
                </View> 
            </View>
        )
    }

    componentDidMount(){
            
           this.props.SpinnerLoad(); 
    }
 
}
 
const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        SpinnerLoad: () => dispatch(SpinnerActions()), 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);