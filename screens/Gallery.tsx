import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import Header from "../components/Header";


type Artwork = {
    image: any;
    title: string;
    price: string;
}
// Sample art list
const artworks = [
  {
    image: require("../assets/Linnahall.jpg"), 
    title: "Linnahall",
    price: "$100",
  },
  {
    image: require("../assets/workshop.jpg"), 
    title: "workshop",
    price: "$100",
  },
  {
    image: require("../assets/forest.jpg"), 
    title: "Estonian Forest",
    price: "$100",
  },
  {
    image: require("../assets/memorial.jpg"), // <--- 👈 Another one
    title: "Jewish Memorial",
    price: "$80",
  },
  {
    image: require("../assets/zebra.jpg"), // <--- 👈 And another
    title: "Nightwalk in Berlin",
    price: "$90",
  },
];

export default function Gallery() {
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);

  return (
    <View style={styles.container}>
        <Header />
      

      <View style={styles.grid}>
        {artworks.map((art, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedArt(art)}
            style={styles.artCard}
          >
            <Image source={art.image} style={styles.artImage} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Zoom Modal */}
      <Modal visible={selectedArt !== null} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.popup}>
            <Image source={selectedArt?.image} style={styles.popupImage} />
            <Text style={styles.popupTitle}>{selectedArt?.title}</Text>
            <Text style={styles.popupPrice}>{selectedArt?.price}</Text>
            <TouchableOpacity onPress={() => setSelectedArt(null)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3e3e3e",
    padding: 20,
  },
  title: {
    color: "#e8e5e5",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  artCard: {
    width: "48%",
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#222",
  },
  artImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
    margin: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
      flex: 1,
  backgroundColor: 'rgba(0,0,0,0.85)',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
},

popupImage: {
  width: '90%',
  height: '60%',
  resizeMode: 'contain',
  borderRadius: 10,
  marginBottom: 20,
},
  popupTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  popupPrice: {
    color: "fff",
    fontSize: 16,
    marginBottom: 10,
  },
  closeText: {
    marginTop: 10,
    color: "fff",
  },
});
