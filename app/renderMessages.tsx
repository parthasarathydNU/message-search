import React from 'react';
import { highlightQueryInMessage } from './highlightQueryInMessage';
import { MessageId } from './types';

export function renderMessages(messages: { id: MessageId, message: string }[], query: string): React.ReactNode[] {
  if (messages.length === 0) {
    return [<div key="no-match" className="p-2 bg-slate-800 text-white text-sm rounded">No search match found</div>];
  }

  return messages.map(message => (
    <div key={message.id} className="p-2 bg-white text-black text-sm rounded border border-gray-300 shadow-sm">
      {highlightQueryInMessage(message.message, query)}
    </div>
  ));
}
