import { useState, useEffect } from 'react';
import { MessageSearch } from './MessageSearch';
import { Messages, MessageId } from './types';

const useSearch = (initialMessages: Messages) => {
  const [messages, setMessages] = useState<{ id: MessageId, message: string }[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [matchingMessages, setMatchingMessages] = useState<{ id: MessageId, message: string }[]>([]);

  useEffect(() => {
    const messageSearch = MessageSearch.getInstance();
    setMessages(Object.entries(initialMessages).map(([id, msg]) => ({ id, message: msg.message })));
    messageSearch.load(initialMessages);
  }, [initialMessages]);

  useEffect(() => {
    const messageSearch = MessageSearch.getInstance();
    const matchingMessageIds = messageSearch.query(searchQuery);
    const matchedMessages = matchingMessageIds.map(id => ({ id, message: messageSearch.getMessageById(id) || "" }));
    setMatchingMessages(matchedMessages);
  }, [searchQuery]);

  return { searchQuery, setSearchQuery, matchingMessages };
};

export default useSearch;
