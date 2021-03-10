import React from 'react';
import {View, Text, Button,Image,TouchableOpacity, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props})=>(
    <Button
        title='Skip'
        color="#000000"
        {...props}
        
    />
)
const Next = ({...props})=>(
    <Button
        title='Next'
        color="#000000"
        {...props}
    />
)
const Done = ({...props})=>(
    <TouchableOpacity
    style={{marginHorizontal:10}}
    {...props}
    >
        <Text style={{fontSize:16}}>
        Done
        </Text>
        </TouchableOpacity>
)

const OnboardingScreen = ({history})=>{
    return (
<Onboarding
SkipButtonComponent={Skip}
NextButtonComponent={Next}
DoneButtonComponent={Done}

onSkip={()=>history.push("/login")}
onDone={()=>history.push("/login")}
  pages={[
    {
      backgroundColor: '#a6e4d0',
      image: <Image source={require('../../assets/1.png')} />,
      title: 'Title',
      subtitle: 'Description',
    },
    {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../../assets/2.png')} />,
        title: 'Title',
        subtitle: 'Description',
      },
      {
        backgroundColor: '#e9bcbe',
        image: <Image source={require('../../assets/3.png')} />,
        title: 'Title',
        subtitle: 'Description',
      }
  ]}
/>
)
}
export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
});

