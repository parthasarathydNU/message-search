import TrieNode from './TrieNode';
import { MessageId } from './types';

class Trie {
  root: TrieNode = new TrieNode();

  insert(word: string, id: MessageId) {
    for (let i = 0; i < word.length; i++) {
      let node = this.root;
      for (let j = i; j < word.length; j++) {
        const char = word[j];
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
        node.ids.add(id);
      }
    }
  }

  search(query: string): Set<MessageId> {
    let node = this.root;
    for (let j = 0; j < query.length; j++) {
        const char = query[j];
      if (!node.children[char]) {
        return new Set();
      }
      node = node.children[char];
    }
    return node.ids;
  }
}

export default Trie;
