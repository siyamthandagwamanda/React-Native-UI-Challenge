import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import  Emoji  from '../componets/Emoji';
import { Chat } from "@/fakeData/chat";
import { colors, fonts } from "@/constants/theme";

export default function ChatRow({ chat }: {chat: Chat}){
    return(
        <View style={styles.row}>
            <Emoji emoji={chat.emoji} color={chat.color} />

{/*top line: name and time*/}
{/*bottom line: message, then badge or ticks*/}

            <View style={styles.content}>
                <View style={styles.line}>
                    <Text style={styles.name}>{chat.name}</Text>
                    <Text style={styles.time}>{chat.time}</Text>
                </View>

                <View style={styles.line}>
                    {chat.typing ? (
                        <Text style={styles.typing}>Typing...</Text>) : (
                        <Text style={styles.message} numberOfLines={1}>
                           <Text style={styles.sender}>{chat.sender} </Text>
                           {chat.message}
                        </Text>
                        )}

                    {chat.unread && <Text style={styles.badge}>{chat.unread}</Text>}
                    {chat.read && <Ionicons name="checkmark-done" size={18} color={colors.primary} />}

                </View>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row', alignItems: 'center', paddingLeft: 24, gap: 16 
    },
    content: {
        flex: 1,
        paddingVertical: 18,
        paddingRight: 24,
        gap: 6,
        borderBottomWidth: 1,
        borderBottomColor: colors.divider,
    },
    line: {
        flexDirection: 'row', alignItems: 'center', gap: 12 
    },
    name: {
        flex: 1, fontFamily: fonts.bold, fontSize: 16, color: colors.textDark
    },
    time: {
        fontFamily: fonts.bold, fontSize: 12, color: colors.textDark
    },
    typing: {
        flex: 1, fontFamily: fonts.bold, fontSize: 14, color: colors.primary
    },
    message: {
        flex: 1, fontFamily: fonts.regular, fontSize: 14, color: colors.textBody
    },
    sender: {
        fontFamily: fonts.bold, color: colors.primary
    },
    badge: {
        width: 24,
        height: 24,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: colors.primary,
        color: colors.white,
        fontFamily: fonts.bold,
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 24,
    },
})