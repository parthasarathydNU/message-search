import React from 'react';

export function highlightQueryInMessage(message: string, query: string): React.ReactNode {
  if (!query) return message;
  const parts = message.split(new RegExp(`(${query})`, 'g'));
  return parts.map((part, index) =>
    part === query ? <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> : part
  );
}
