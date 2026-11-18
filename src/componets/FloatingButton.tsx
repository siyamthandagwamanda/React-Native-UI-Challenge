import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

// Non-functional: it only changes colour on hover.
export default function FloatingButton(){
    const [hovered, setHovered] = useState(false);

    return(
        <Pressable
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}
            style={[styles.button, hovered && styles.buttonHover]}
        >
            <Ionicons name="add" size={36} color={colors.white}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        right: 24,
        bottom: 32,
        width: 68,
        height: 68,
        borderRadius: 34,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        shadowColor: colors.primary,
        shadowOpacity: 0.4,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
    },
    buttonHover: {
        backgroundColor: '#D9550C'
    },
})