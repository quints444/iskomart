import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
        {/*logo*/}
        <Image source={require("../assets/logo.png")} style={styles.logo}/>

        {/* Pink Section */}
        <View style={styles.registerContainer}>
        <Text style={styles.title}>Get started</Text>

        {/* Name Fields */}
        <Text style={styles.label}>Name</Text>
        <View style={styles.nameInputContainer}>
          <TextInput style={[styles.input, styles.nameInput]} placeholder="Last name" placeholderTextColor="#A9A9A9" />
          <TextInput style={[styles.input, styles.nameInput]} placeholder="First name" placeholderTextColor="#A9A9A9" />
        </View>

        {/* Username */}
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder="" />

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="" />

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="" secureTextEntry={true} />

        {/* Sign In Link */}
        <Text style={styles.signInText}>
          Already have an account? 
          <Text style={styles.signInLink} onPress={() => navigation.navigate('LogIn')}> Sign in</Text>
        </Text>

        {/* Register Button */}
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF7EA', 
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  registerContainer: {
    width: '100%',
    backgroundColor: '#F9C2D0', 
    padding: 20,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    alignItems: 'center',
    paddingBottom: 60,
    paddingTop: 20,
    minHeight: 500, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  label: {
    marginLeft: 20,
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  nameInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  nameInput: {
    width: '48%', 
  },
  signInText: {
    marginTop: 10,
    fontSize: 14,
    color: 'white',
  },
  signInLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  registerButton: {
    marginTop: 20,
    backgroundColor: '#FFDC9A', 
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Register;
