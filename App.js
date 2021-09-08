import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/Home'
import DetailsScreen from './screens/Details'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const StackNavigator = createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  Details:{
    screen:DetailsScreen,
    navigationOptions:{
      headerShown:false
    }
  },
 
},
{initialRouteName:'Home'}
)
const AppContainer = createAppContainer(StackNavigator)