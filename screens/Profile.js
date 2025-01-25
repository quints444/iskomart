import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,  FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = ({navigation}) => {
    const posts = [
    {
        id: '1',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '2', 
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '3', 
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '4', 
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '5', 
        image: 'https://via.placeholder.com/150',
    },
    {
        id: '6', 
        image: 'https://via.placeholder.com/150',
    },
 ];

 const renderPost = ({item}) =>(
    <View style={styles.postContainer}>
        <Image source={{uri: item.image}} style={styles.postImage}/>
        <View style={styles.iconsContainer}>
            <TouchableOpacity>
                <Icon name="heart-outline" size={24} color="#000" style={styles.icon} />
                </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="chatbubble-outline" size={24} color="#000" style={styles.icon} />
            </TouchableOpacity>
        </View>
    </View>
 );

 return (
        <View style={styles.container}>
          {/* Header */}
        <View style={styles.header}>
            <Image source={require('../assets/logo.png')} style={{ width: 50, height: 50 }} />
        </View>

        {/*Profile info*/}

        <View style={styles.profileInfoContainer}>
            <TouchableOpacity style={styles.logOut}>
                <Text style={styles.logOutText}>Log Out</Text>
            </TouchableOpacity>
            <View style={styles.profileInfo}>
            <Text style={styles.userName}>Ariana Grande</Text>
            <Text style={styles.university}>Polytechnic University of the Philippines</Text>
            <TouchableOpacity>
                <Text style={styles.editProfile}>Edit Profile</Text>            
            </TouchableOpacity>           
        </View>
     </View>


        {/*Feed Section*/}
        <FlatList 
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.feedRow}
        contentContainerStyle={styles.feedContainer}
      />

      {/*Bottom Navigation*/}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name="home-outline" size={25} color="#000"/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Icon name="search-outline" size={25} color="#000"/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Icon name="add-circle-outline" size={25} color="#000"/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Icon name="mail-outline" size={25} color="#000"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Icon name="person-outline" size={25} color="#000"/>
        </TouchableOpacity>
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9f5e8',
    },
    header: {   
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F9C2D0',
    },
    profileInfoContainer:{
        marginTop: 20,
        paddingHorizontaL: 20,
        position: 'relative',
    },
    profileInfo:{
        marginTop: 20,
        paddingHorizontaL: 20,
        position: 'relative',
        alignItems: 'center',
    },
    logOut: {
        position: 'absolute',
        top: 0,
        right: 20,
    },
    logOutText: {
        fontSize: 14,
        color: '#000',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    university: {
      fontSize: 14,
      color: '#555',
      marginBottom: 10,
    },
    editProfile: {
      fontSize: 14,
      color: '#BBB7B7',
      textDecorationLine: 'underline',
    },
    feedContainer: {
      padding: 10,
    },
    feedRow: {
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    postContainer: {
        flex: 1,
        margin: 5,
        borderRadius: 20,
        backgroundColor: '#fff',
        elevation: 5,
        borderWidth: 2,
        padding: 10,
        position: 'relative',
    },
    postImage: {
      width: '100%',
      height: 150,
      borderRadius: 10,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5,
    },

    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 20,
      backgroundColor: '#FFDC9A',
      borderRadius: 110,
      marginHorizontal: 30,
      marginBottom: 30,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      borderWidth: 2,
      borderColor: '#000',
    },
  });
  
  export default Profile;