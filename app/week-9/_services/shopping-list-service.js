import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const getItems = async (userId) => {};

export async function addItem(userId, item) {
  // to add an item, you need name, quantity and category

  if (!item.name || !item.quantity || !item.quantity) {
    throw new Error("Missing item properties.");
  }
  try {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    return docRef.id;
  } catch (error) {
    console.error("Error: Cannot add item to the database.", error);
  }
}
export async function deleteItem(userId, itemId) {
  // to add an item, you need name, quantity and category

  try {
    const itemRef = doc(db, "users", userId, "items", itemId);
    await deleteDoc(itemRef);
    console.log("Item successfully deleted.");
  } catch (error) {
    console.error("Error: Cannot add item to the database.", error);
  }
}
