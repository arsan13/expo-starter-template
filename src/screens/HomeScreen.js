import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Button, Title } from "react-native-paper";
import { db } from "../utils/firebase";

const HomeScreen = ({ user }) => {
  const [books, setBooks] = useState([]);

  const handleBuy = async (id) => {
    const addRef = await db.collection("transactions").doc(id).set({
      userId: user,
      bookId: id,
      date: new Date().toLocaleDateString(),
      sell: false,
    });
    console.log(addRef);
  };

  useEffect(() => {
    let temp = [];
    const getBooks = async () => {
      let data = await db.collection("books").get();
      // data.forEach((doc) => setBooks((prev) => [...prev, doc.data()]));
      data.forEach((doc) => temp.push(doc.data()));
      setBooks(data);
    };
    const getBooksRealtime = async () => {
      db.collection("books").onSnapshot((querySnapshot) => {
        var temp = [];
        querySnapshot.forEach((doc) => {
          temp.push(doc.data());
        });
        console.log(temp);
        setBooks(temp);
      });
    };
    getBooksRealtime();
  }, []);

  const renderItem = (item) => {
    return (
      <View style={styles.card}>
        <Title style={styles.text}>{item.item.bookName}</Title>
        <Title style={styles.text}>{item.item.price}</Title>
        <Title style={styles.text}>{item.item.published} year</Title>
        <Button mode="text" onPress={() => handleBuy(item.item.bookId)}>
          Buy
        </Button>
      </View>
    );
  };

  console.log(books);

  return (
    <FlatList
      style={{ marginTop: 5 }}
      data={books}
      keyExtractor={(item) => item.bookId}
      renderItem={renderItem}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    margin: 5,
    borderWidth: 1,
    padding: 5,
  },
  text: {
    fontSize: 12,
  },
});
