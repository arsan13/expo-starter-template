import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "user";

//Check if user is logged in
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    return value;
  } catch (e) {
    console.log("Error reading value from local storage.", e);
  }
};

//User logs in
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, value);
  } catch (e) {
    console.log("Error storing data in local storage. ", e);
  }
};

//User logs out
const removeData = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.log("Error removing data from local storage. ", e);
  }
};

export { getData, storeData, removeData };
