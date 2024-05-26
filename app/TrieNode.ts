import { MessageId } from "./types";

class TrieNode {
  children: { [key: string]: TrieNode } = {};
  ids: Set<MessageId> = new Set();
}

export default TrieNode;
