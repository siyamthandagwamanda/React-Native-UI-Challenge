import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../componets/Header';
import TabBar from '../componets/TabBar';
import ChatList from '@/componets/ChatList';
import { CHATS } from '@/fakeData/chat';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header title="HALODEK" />
      <TabBar tabs={['Chat', 'Status', 'Calls']} activeTab="Chat" />
      <ChatList chats={CHATS}/>
      

    </SafeAreaView>
  );
}

