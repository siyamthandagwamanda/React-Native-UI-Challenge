import ChatList from '@/componets/ChatList';
import FloatingButton from '@/componets/FloatingButton';
import { CHATS } from '@/fakeData/chat';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../componets/Header';
import TabBar from '../componets/TabBar';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header title="HALODEK" />
      <TabBar tabs={['Chat', 'Status', 'Calls']} activeTab="Chat" />
      <ChatList chats={CHATS}/>
      <FloatingButton />

    </SafeAreaView>
  );
}

