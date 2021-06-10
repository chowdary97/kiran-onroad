import React from 'react';

import {View,Text,Button} from 'react-native';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


const App =()=>{

  // database()
  // .ref('/users/123')
  // .set({
  //   name: 'Ada Lovelace',
  //   age: 31,
  // })
  // .then(() => console.log('Data set.'));


  auth()
  .createUserWithEmailAndPassword('thimmachowdary3@gmail.com', 'SuperSecretPassword')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });


  return(
    <View>
      <Text>
        Hello
      </Text>
    </View>
  );
}


export default App;

