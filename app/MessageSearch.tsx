import { Messages, MessageId } from "./types";
import Trie from "./Trie";
import TrieNode from "./TrieNode";

export class MessageSearch {
  static service: MessageSearch | null = null;
  private data: Messages | null = {};
  private trie: Trie = new Trie();

  constructor() {
    this.data = null;
  }

  load(data: Messages) {
    this.data = data;
    this.prepare();
  }

  query(query: string): MessageId[] {
    if (!query || query.includes(" ")) {
      return [];
    }

    const result = Array.from(this.trie.search(query));
    return result;
  }

  getMessageById(id: MessageId): string | null {
    return this.data && this.data[id] ? this.data[id].message : null;
  }

  prepare() {
    if (this.data) {
      for (const id in this.data) {
        const message = this.data[id].message.split(/\s+/);
        // Insert each word into the trie
        for (const word of message) {
          this.trie.insert(word, id);
        }
      }
    }
  }

  static getInstance() {
    if (!MessageSearch.service) {
      MessageSearch.service = new MessageSearch();
    }
    return MessageSearch.service;
  }
}
