import { Text, View, StyleSheet} from "react-native";

export default function Gallery(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Gallery</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3e3e3e"
    },
    text: {
        color: "#e8e5e5"
    }

})