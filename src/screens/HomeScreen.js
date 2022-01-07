import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Button, Title } from "react-native-paper";
import { db } from "../utils/firebase";
import { useTheme } from "../contexts/ThemeProvider";
import { getUser } from "../contexts/UserProvider";
import { handleLoading } from "../contexts/LoadingProvider";

const HomeScreen = () => {
  const [books, setBooks] = useState([]);
  const setLoading = handleLoading();
  const isDark = useTheme();
  const user = getUser();

  const handleBuy = async (id) => {
    setLoading(true);
    const addRef = await db.collection("transactions").doc(id).set({
      userId: user,
      bookId: id,
      date: new Date().toLocaleDateString(),
      sell: false,
    });
    setLoading(false);
    console.log(addRef);
  };

  useEffect(() => {
    let temp = [];
    const getBooks = async () => {
      setLoading(true);
      let data = await db.collection("books").get();
      // data.forEach((doc) => setBooks((prev) => [...prev, doc.data()]));
      data.forEach((doc) => temp.push(doc.data()));
      setBooks(data);
      setLoading(false);
    };
    const getBooksRealtime = async () => {
      setLoading(true);
      db.collection("books").onSnapshot((querySnapshot) => {
        var temp = [];
        querySnapshot.forEach((doc) => {
          temp.push(doc.data());
        });
        console.log(temp);
        setBooks(temp);
      });
      setLoading(false);
    };
    getBooksRealtime();
  }, []);

  const renderItem = (item) => {
    return (
      <View style={[styles.card, { borderColor: isDark ? "#fff" : "#041C32" }]}>
        <Title style={styles.text}>{item.item.bookName}</Title>
        <Title style={styles.text}>{item.item.price}</Title>
        <Title style={styles.text}>{item.item.published} year</Title>
        <Button mode="text" onPress={() => handleBuy(item.item.bookId)}>
          Buy
        </Button>
      </View>
    );
  };

  return (
    <>
      {books.length < 1 ? (
        <Title>No data</Title>
      ) : (
        <FlatList
          style={{ marginTop: 5 }}
          data={books}
          keyExtractor={(item) => item.bookId}
          renderItem={renderItem}
        />
      )}
    </>
  );
};

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
export default HomeScreen;
