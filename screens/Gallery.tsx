import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import Header from "../components/Header";

type Artwork = {
  image: any;
  title: string;
  price: string;
  description?: string;
};

const artworks = [
  {
    image: require("../assets/Linnahall.jpg"),
    title: "Linnahall",
    price: "$100",
    description: "A view of the iconic Linnahall in Tallinn.",
  },
  {
    image: require("../assets/workshop.jpg"),
    title: "workshop",
    price: "$100",
    description: "An atmospheric workshop scene.",
  },
  {
    image: require("../assets/forest.jpg"),
    title: "Estonian Forest",
    price: "$100",
    description: "A tranquil Estonian forest landscape.",
  },
  {
    image: require("../assets/memorial.jpg"),
    title: "Jewish Memorial",
    price: "$100",
    description: "A moving tribute at the Jewish Memorial.",
  },
  {
    image: require("../assets/zebra.jpg"),
    title: "Nightwalk in Berlin",
    price: "$100",
    description: "Crossing streets in Late Night Berlin.",
  },
];

const IMAGE_SIZE = 250;
const MIN_DISTANCE = 150

function generateRandomPositions(count: number, width: number, height: number) {
  const DEADZONE_BOTTOM = 80; // px to keep images above the bottom
  const DEADZONE_TOP = 100;   // already used for header
  const positions: { left: number; top: number }[] = [];
  let attempts = 0;
  while (positions.length < count && attempts < 1000) {
    const left = Math.random() * (width - IMAGE_SIZE);
    const top = Math.random() * (height - IMAGE_SIZE - DEADZONE_BOTTOM - DEADZONE_TOP) + DEADZONE_TOP;
    // Check minimum distance
    let tooClose = false;
    for (const pos of positions) {
      const dx = pos.left - left;
      const dy = pos.top - top;
      if (Math.sqrt(dx * dx + dy * dy) < IMAGE_SIZE + MIN_DISTANCE) {
        tooClose = true;
        break;
      }
    }
    if (!tooClose) {
      positions.push({ left, top });
    }
    attempts++;
  }
  return positions;
}

export default function Gallery() {
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);
  const [positions, setPositions] = useState<{ left: number; top: number }[]>([]);

  useEffect(() => {
    const { width, height } = Dimensions.get("window");
    setPositions(generateRandomPositions(artworks.length, width, height));
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.scatterContainer}>
        {artworks.map((art, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedArt(art)}
            style={[
              styles.artImageWrapper,
              positions[index] ? { left: positions[index].left, top: positions[index].top } : {},
            ]}
          >
            <Image source={art.image} style={styles.artImage} />
          </TouchableOpacity>
        ))}
      </View>
      {/* Zoom Modal */}
      <Modal visible={selectedArt !== null} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.popupRow}>
            <View style={styles.popupTextContainer}>
              <Text style={styles.popupTitle}>{selectedArt?.title}</Text>
              <Text style={styles.popupPrice}>{selectedArt?.price}</Text>
              <Text style={styles.popupDescription}>{selectedArt?.description}</Text>
              <TouchableOpacity onPress={() => setSelectedArt(null)}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
            <Image source={selectedArt?.image} style={styles.popupImage} />
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
    padding: 0,
  },
  scatterContainer: {
    flex: 1,
    position: "relative",
  },
  artImageWrapper: {
    position: "absolute",
  },
  artImage: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    resizeMode: "cover",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#222",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  popupRow: {
    width: '90%',
    height: '80%',
    backgroundColor: 'rgba(0,0,0,0.95)',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupTextContainer: {
    flex: 1,
    marginRight: 20,
  },
  popupImage: {
    width: '55%',
    height: '90%',
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 0,
  },
  popupTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  popupPrice: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  popupDescription: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  closeText: {
    marginTop: 10,
    color: "#fff",
    fontSize: 16,
  },
});
