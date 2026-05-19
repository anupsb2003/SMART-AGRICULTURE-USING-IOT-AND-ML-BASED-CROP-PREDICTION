import React, { useRef, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ListRenderItem,
} from "react-native";

type ChatMessage = {
  id: string;
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot(): JSX.Element {

  const [message, setMessage] = useState<string>("");

  const [chat, setChat] = useState<ChatMessage[]>([]);

  const flatListRef = useRef<FlatList<ChatMessage>>(null);

  const sendMessage = async (): Promise<void> => {

    if (message.trim() === "") return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: message,
    };

    setChat((prev) => [...prev, userMessage]);

    setMessage("");

    try {

      const response = await fetch(
        "http://localhost:8000/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage.text,
          }),
        }
      );

      const data = await response.json();

      const botMessage: ChatMessage = {
        id: Math.random().toString(),
        sender: "bot",
        text: data.reply,
      };

      setChat((prev) => [...prev, botMessage]);

      setTimeout(() => {

        flatListRef.current?.scrollToEnd({
          animated: true,
        });

      }, 100);

    } catch (error) {

      console.log("FETCH ERROR:", error);

    }

  };

  const renderItem: ListRenderItem<ChatMessage> = ({
    item,
  }) => (

    <View
      style={{
        marginBottom: 14,

        alignItems:
          item.sender === "user"
            ? "flex-end"
            : "flex-start",
      }}
    >

      <View
        style={
          item.sender === "user"
            ? styles.userMessage
            : styles.botMessage
        }
      >

        <Text
          style={
            item.sender === "user"
              ? styles.userText
              : styles.botText
          }
        >
          {item.text}
        </Text>

      </View>

    </View>

  );

  return (

    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView
        style={styles.container}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : undefined
        }
      >

        {/* HEADER */}

        <View style={styles.header}>

          <Text style={styles.logo}>
            🌾
          </Text>

          <Text style={styles.title}>
            Smart Agriculture AI Chatbot
          </Text>

        </View>

        {/* CHAT AREA */}

        <FlatList
          ref={flatListRef}
          data={chat}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.chatArea}
          showsVerticalScrollIndicator={false}
        />

        {/* INPUT AREA */}

        <View style={styles.inputArea}>

          <TextInput
            style={styles.input}
            placeholder="Ask farming questions..."
            placeholderTextColor="rgba(255,255,255,0.6)"
            value={message}
            onChangeText={setMessage}
          />

          <TouchableOpacity
            style={styles.sendButton}
            onPress={sendMessage}
          >

            <Text style={styles.sendText}>
              Send
            </Text>

          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#071a2a",
  },

  /* HEADER */

  header: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingVertical: 18,

    backgroundColor: "#082638",

    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.08)",
  },

  logo: {
    fontSize: 34,
    marginRight: 12,
  },

  title: {
    flex: 1,

    color: "white",

    fontSize: 24,
    fontWeight: "700",
  },

  /* CHAT AREA */

  chatArea: {
    padding: 16,

    paddingBottom: 30,
  },

  /* USER MESSAGE */

  userMessage: {
    alignSelf: "flex-end",

    maxWidth: "75%",
    minWidth: 70,

    backgroundColor: "#00e5ff",

    paddingHorizontal: 16,
    paddingVertical: 14,

    borderRadius: 18,

    borderBottomRightRadius: 4,
  },

  userText: {
    color: "#051a2a",

    fontSize: 15,
    fontWeight: "600",

    lineHeight: 22,
  },

  /* BOT MESSAGE */

  botMessage: {
    alignSelf: "flex-start",

    maxWidth: "80%",
    minWidth: 70,

    backgroundColor: "#163447",

    paddingHorizontal: 16,
    paddingVertical: 14,

    borderRadius: 18,

    borderBottomLeftRadius: 4,
  },

  botText: {
    color: "white",

    fontSize: 15,

    lineHeight: 24,
  },

  /* INPUT AREA */

  inputArea: {
    flexDirection: "row",
    alignItems: "center",

    padding: 14,

    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.08)",

    backgroundColor: "#071a2a",
  },

  input: {
    flex: 1,

    height: 54,

    backgroundColor: "#163447",

    borderRadius: 16,

    paddingHorizontal: 18,

    color: "white",

    fontSize: 15,

    marginRight: 12,
  },

  sendButton: {
    width: 90,
    height: 54,

    backgroundColor: "#00e5ff",

    borderRadius: 16,

    justifyContent: "center",
    alignItems: "center",
  },

  sendText: {
    color: "#051a2a",

    fontSize: 15,
    fontWeight: "700",
  },

});