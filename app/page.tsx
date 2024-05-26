'use client';

import { useEffect, useMemo, useState } from "react";
import useSearch from "./useSearch";
import { MessageSearch } from "./MessageSearch";
import { renderMessages } from "./renderMessages";
import data from "./reviews.json";

export default function Home() {
  const { searchQuery, setSearchQuery, matchingMessages } = useSearch(data);
  const [tempQuery, setTempQuery] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempQuery(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchQuery(tempQuery);
    }, 300); // Adjust the debounce delay as needed

    return () => clearTimeout(timeoutId);
  }, [tempQuery]);

  useEffect(() => {
    const messageSearchService = MessageSearch.getInstance();
    messageSearchService.load(data);
    messageSearchService.prepare();
  }, []);

  const messageElements = useMemo(() => {
    if (!searchQuery) {
      return [];
    }

    return renderMessages(matchingMessages, searchQuery);
  }, [matchingMessages, searchQuery]);

  return (
    <main className="flex w-full max-w-xl flex-col p-4 shadow border mx-auto mt-4 rounded-lg min-h-[80vh] bg-neutral-100">
      <h1 className="font-medium text-center">Message Search</h1>
      <input onChange={handleChange} type="text" placeholder="Query" className="border rounded text-sm p-2 w-full" />
      <div className="flex flex-col gap-2 py-2 items-start overflow-y-auto max-h-[60vh]">
        {messageElements}
      </div>
    </main>
  );
}
