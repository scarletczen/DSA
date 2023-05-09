class TrieNode{
    children:Record<string,TrieNode>;
    endOfWord:boolean;
    constructor(){
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie {
    root:TrieNode;
    constructor() {
       this.root = new TrieNode();
    }

    insert(word: string): void {
        let current = this.root;

        for (const c of word) {
            if (!(c in current.children)){
                current.children[c] = new TrieNode();
            }
            current = current.children[c];
        }
        current.endOfWord = true;
    }

    search(word: string): boolean {
        let current = this.root;

        for (const c of word) {
            if (!(c in current.children)){
                return false;
            }
            current = current.children[c];
        }

        return current.endOfWord;
    }

    startsWith(prefix: string): boolean {
        let current = this.root;

        for (const c of prefix){
            if (!(c in current.children)){
                return false;
            }
            current = current.children[c];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */