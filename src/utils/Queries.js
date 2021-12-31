import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export default function Queries() {
  const handlePress = async () => {
    //ADD DATA
    // const addRef = await db.collection("users").add({
    //   first: "Ada",
    //   last: "Lovelace",
    //   born: 1815,
    // });

    //ADD OR UPDATE DATA
    // const addRef = await db.collection("users").doc("customKey").set({
    //   first: "Ada",
    //   last: "Lovelace",
    //   born: 1815,
    // });

    //UPDATE DATA
    // const docRef = db.collection("users").doc("customKey");
    // await docRef.update({ born: 1845 });

    //DELETE DATA
    // await db.collection("users").doc("customKey").delete();

    //READ DATA
    const data = await db.collection("users").get();
    // const data = await db
    //   .collection("users")
    //   .where("last", "==", "Turing")
    //   .get();
    data.forEach((doc) => console.log(doc.data()));

    //REALTIME DATA
    // db.collection("books").onSnapshot((querySnapshot) => {
    //   var temp = [];
    //   querySnapshot.forEach((doc) => {
    //     temp.push(doc.data());
    //   });
    //   console.log(temp);
    // });

    //WEB VERSION 9
    // try {
    //   const docRef = await addDoc(collection(db, "users"), {
    //     first: "Alan",
    //     middle: "Mathison",
    //     last: "Turing",
    //     born: 1912,
    //   });

    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  };

  return (
    <View style={styles.container}>
      <Button title="Db" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
