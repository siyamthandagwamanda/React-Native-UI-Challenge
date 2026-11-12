import { FlatList } from "react-native";
import  ChatRow  from '../componets/ChatRow';
import { Chat } from '../fakeData/chat';

//scrolling list of chats: draws one ChatRow for each chat.

export default function ChatList({chats}: {chats: Chat[]}){
    return(
        <FlatList
            data={chats}
            keyExtractor={(chat) => chat.id}
            renderItem={({ item }) => <ChatRow chat={item} />} 
        />
    )
}