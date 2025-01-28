import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatPage = ({ navigation, route }) => {
  const { userName, avatar } = route.params;
  const [messages, setMessages] = useState([
    // { id: '1', text: 'I received the item. Thank you!', sender: 'other' },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: inputText, sender: 'me' }]);
      setInputText('');
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageBubble,
      item.sender === 'me' ? styles.myMessage : styles.otherMessage,
    ]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
  {/* Header */}
  <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowContainer}>
      <Icon name="arrow-back" size={25} color="#000" />
    </TouchableOpacity>
    <View style={styles.userInfo}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={styles.userName}>{userName}</Text>
    </View>
  </View>

  {/* Chat Messages */}
  <FlatList
    data={messages}
    renderItem={renderMessage}
    keyExtractor={(item) => item.id}
    style={styles.messagesList}
  />

  {/* Input Field */}
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="Write a message..."
      value={inputText}
      onChangeText={setInputText}
    />
    <TouchableOpacity onPress={sendMessage}>
      <Icon name="send" size={25} color="#007AFF" />
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
      alignItems: 'center',
      paddingHorizontal: 10,
      backgroundColor: '#F9C2D0',
      paddingTop: 20, // Adds space at the top to adjust the arrow position
    },
    arrowContainer: {
      marginRight: 10, // Adds some space between the arrow and the avatar
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10, // Space between avatar and user name
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    messagesList: {
      flex: 1,
      paddingHorizontal: 10,
    },
    messageBubble: {
      padding: 10,
      marginVertical: 5,
      borderRadius: 10,
      maxWidth: '75%',
    },
    myMessage: {
      backgroundColor: '#DCF8C6',
      alignSelf: 'flex-end',
    },
    otherMessage: {
      backgroundColor: '#fff',
      alignSelf: 'flex-start',
    },
    messageText: {
      fontSize: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderColor: '#ddd',
    },
    input: {
      flex: 1,
      padding: 10,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#ccc',
      marginRight: 10,
    },
  });  

export default ChatPage;