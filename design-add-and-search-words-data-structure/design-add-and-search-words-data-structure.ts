// Trie Solution with Recursive DFS
class TrieNode {
    children: Record<string,TrieNode>;
    endOfWord: boolean;
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class WordDictionary {
     root:TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let current = this.root;

        for (const c of word){
            if (!(c in current.children)){
                current.children[c] = new TrieNode();
            }
            current = current.children[c]
        }
        current.endOfWord = true;
    }

    search(word: string): boolean {
        function dfs (j:number, root:TrieNode):boolean {
            let current = root;

            for (let i = j; i< word.length; i++){
                const c = word[i];

                if(c === "."){
                    for(const key in current.children){
                        if (Object.prototype.hasOwnProperty.call(current.children,key)){
                            const child = current.children[key];
                            if (dfs(i+1,child)){
                                return true;
                            }
                        }
                    }
                    return false;
                } else {
                    if (!(c in current.children)){
                        return false;
                    }
                    current = current.children[c];
                }
               
            }
            return current.endOfWord;
        }
        return dfs(0,this.root);
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */