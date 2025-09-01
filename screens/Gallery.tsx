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
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDecay,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

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
    image: require("../assets/Tree.jpg"),
    title: "Tree",
    price: "$100",
    description: "Late Summer in Estonia",
  },
    {
    image: require("../assets/Flyer.jpg"),
    title: "Flyer",
    price: "$100",
    description: "Contemporary Street Art in Berlin",
  },
    {
    image: require("../assets/Trashcan.jpg"),
    title: "Trashcan",
    price: "$100",
    description: "A joking trashcan in Berlin.",
  },
    {
    image: require("../assets/Lotus.jpg"),
    title: "Lotus",
    price: "$100",
    description: "Botanical Garten Lotus with Moss",
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
    price: "$80",
    description: "A moving tribute at the Jewish Memorial.",
  },
  {
    image: require("../assets/zebra.jpg"),
    title: "Nightwalk in Berlin",
    price: "$90",
    description: "A zebra crossing at night in Berlin.",
  },
];

const IMAGE_SIZE = 600;
const MIN_DISTANCE = 400;
const GRID_COLS = 3; // Number of columns in the grid

function generateScatteredGridPositions(count: number, imageSize: number, minDistance: number, cols: number) {
  const positions: { left: number; top: number }[] = [];
  const spacing = imageSize + minDistance;
  const rows = Math.ceil(count / cols);
  for (let i = 0; i < count; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;
    // Add a small offset for a scattered look
    const offsetX = ((i % 2 === 0 ? 1 : -1) * (minDistance * 0.3));
    const offsetY = ((i % 3 === 0 ? 1 : -1) * (minDistance * 0.2));
    positions.push({
      left: col * spacing + offsetX,
      top: row * spacing + offsetY,
    });
  }
  return positions;
}

export default function Gallery() {
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);
  const [positions, setPositions] = useState<{ left: number; top: number }[]>([]);

  // Calculate canvas size based on grid
  const cols = GRID_COLS;
  const rows = Math.ceil(artworks.length / cols);
  const CANVAS_WIDTH = cols * (IMAGE_SIZE + MIN_DISTANCE);
  const CANVAS_HEIGHT = rows * (IMAGE_SIZE + MIN_DISTANCE);

  // Pan state
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const panStartX = useSharedValue(0);
  const panStartY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  // Use new Gesture API
  const panGesture = Gesture.Pan()
    .onStart(() => {
      panStartX.value = translateX.value;
      panStartY.value = translateY.value;
    })
    .onUpdate((event) => {
      translateX.value = panStartX.value + event.translationX;
      translateY.value = panStartY.value + event.translationY;
    })
    .onEnd((event) => {
      translateX.value = withDecay({ velocity: event.velocityX });
      translateY.value = withDecay({ velocity: event.velocityY });
    });

  useEffect(() => {
    setPositions(generateScatteredGridPositions(artworks.length, IMAGE_SIZE, MIN_DISTANCE, GRID_COLS));
    // Center the canvas in the viewport
    const { width, height } = Dimensions.get("window");
    translateX.value = (width - CANVAS_WIDTH) / 2;
    translateY.value = (height - CANVAS_HEIGHT) / 2;
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <GestureDetector gesture={panGesture}>
        <Animated.View style={{ flex: 1 }} pointerEvents="box-none">
          <View style={styles.viewport}>
            <Animated.View style={[styles.scatterContainer, { width: CANVAS_WIDTH, height: CANVAS_HEIGHT }, animatedStyle]} pointerEvents="box-none">
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
            </Animated.View>
          </View>
        </Animated.View>
      </GestureDetector>
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
  viewport: {
    flex: 1,
    overflow: 'hidden',
  },
  scatterContainer: {
    // position: "relative" is default, so just remove position property
    // width and height set dynamically
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
