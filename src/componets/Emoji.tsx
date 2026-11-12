import { StyleSheet, Text, View } from "react-native";

// circle: color with an emoji in the middle

export default function Emoji({ emoji, color }: { emoji: string; color: string }){
    return(
        <View style={[styles.circle, {backgroundColor: color}]}>
            <Text style={styles.emoji}>{emoji}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    emoji: {
        fontSize: 30, color: '#fff'
    },

})