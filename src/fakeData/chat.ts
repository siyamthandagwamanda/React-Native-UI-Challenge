export type Chat = {
    id: string;
    name: string;
    time: string;
    message: string;
    emoji: string;
    color: string;
    sender?: string;
    typing?: boolean;
    unread?: number;
    read?: boolean; 
}

export const CHATS: Chat[] = [
  { id: '1', name: 'Faza Dzikrulloh', time: '14.30', message: '', typing: true, emoji: '👨‍🦳', color: '#BFE1F3' },
  { id: '2', name: 'Hatypo Studio', time: '14.30', sender: 'Faza', message: 'Can you help me to do with new project we got?', unread: 2, emoji: '▲', color: '#2D8CEB' },
  { id: '3', name: 'Zhofran A', time: '14.00', message: 'I think we should upgrade the social media plan', unread: 2, emoji: '🧔🏻', color: '#D2C6EF' },
  { id: '4', name: 'Vito Arvy', time: '13.40', message: "Okay adhit, I'll tell faza about it 👍🏼", emoji: '👲', color: '#F8C6D0' },
  { id: '5', name: 'Raul', time: 'Yesterday', message: 'Thanks Raul! 🙏🏼✨', read: true, emoji: '🧔🏽', color: '#F9DCA9' },
  { id: '6', name: 'Farhan Bagas', time: '29/08/22', message: "Great work farhan! 👍🏼 I'll tell faza about logo design", read: true, emoji: '🧢', color: '#BFDDF0' },
  { id: '7', name: 'Abdull', time: '28/08/22', message: 'Perfecto!🔥 I will check it later', read: true, emoji: '🤓', color: '#BEE6C5' },
  { id: '8', name: 'Ibe hatypo', time: '27/08/22', message: 'nicely done bro!👍🏻', read: true, emoji: '👨🏻‍🦲', color: '#F6E4A1' },
];