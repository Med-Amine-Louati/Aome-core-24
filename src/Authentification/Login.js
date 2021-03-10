import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Button
} from 'react-native';
import { Icon } from 'react-native-elements';

export default function LoginScreen1({history}) {

    const [passwordSecured,setPasswordSecured]=React.useState(true);
    const [passLength,setPassLength]=React.useState(0);
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
   const isEmailValid=(email)=>{
       const re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
       return re.test(String(email).toLocaleLowerCase())
   }
   const click=()=>{
    if(email.length===0   && passLength===0){
        alert("you must fill your email and your password")
    }
    if(email.length===0   && passLength<6){
        alert("you must fill your email and your password must be longer than 6 ")
    }
     if(email.length!==0 &&!isEmailValid(email) && passLength <6){
           alert("invalid email and password must be longer than 6")
       }
     if(email.length!==0 &&!isEmailValid(email) && passLength >6){
           alert("invalid email ")
       }
       
       if(email.length!==0 && isEmailValid(email) && passLength <6){
           alert("password must be longer than 6")
       }
       
       if( isEmailValid(email) && passLength ===0){
           alert("password must be longer than 6")
       }
      
       console.log({email,password})
   }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <Icon
                color='#fff'
                name='comments'
                type='font-awesome'
                size={50}
              />
            </View>
            <Text style={styles.loginTitleText}>Login</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <View style={styles.inputView}>
              <Icon
                color='#333'
                name='user'
                type='font-awesome'
                size={20}
              />
              <TextInput
                style={{flex:1,paddingHorizontal:12}}
                onChangeText={(text)=>{
                    setEmail(text)
                }}
                keyboardType='email-address'
                textContentType='emailAddress'
              />
              </View>
              {!isEmailValid(email)&& email.length >0 && (
                  <Text style={styles.errorText}> Email Adress is not valid </Text>
              )}
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.inputView}>
              <Icon
                color='#333'
                name='lock'
                type='font-awesome'
                size={20}
              />
              <TextInput
                style={{flex:1,paddingHorizontal:12}}
                secureTextEntry={passwordSecured}
                placeholder={'password'}
                textContentType='password'
                onChangeText={(text)=>{
                    setPassword(text)
                    setPassLength(text.length);
                }}
              />
           
              <TouchableOpacity
              style={{paddingRight:4}}
              onPress={()=>{setPasswordSecured(!passwordSecured)}}>
              <Icon name='eye' type='font-awesome-5' size={20}/>
              </TouchableOpacity>
              </View>
            </View>
            <View >
                  
                  {passLength ===0 ?(
                      <Text></Text>
                  ) : passLength <6 ? (
                      <Text style={{marginTop:10,color:'red'}}> Weak</Text>
                  ) : passLength <12 ? (
                      <Text style={{marginTop:10,color:'orange'}}>Good</Text>
                  ) : (
                      <Text style={{marginTop:10,color:'green'}}>Strong</Text>
                  )}

              </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}
              onPress={()=>{click()}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.registerText}>
                Don't have an account? Register Now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
      <Button
          title="Create Account"
          onPress={() =>
            history.push("/signup")
          }
        />
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#ff6b81',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
  errorText:{
      marginTop:10,
      color:"red"
  },
  passLengthView:{
      width:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: '#ff7979',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  inputView:{
 width:"100%",
 height:44,
 backgroundColor:"#dfe4ea",
 borderRadius:8,
 paddingHorizontal:10,
 display:"flex",
 flexDirection:"row",
 alignItems:"center"
  },
  centerizedView: {
    width: '100%',
    top: '15%',
  },
  authBox: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#eb4d4b',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#ff4757',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});


