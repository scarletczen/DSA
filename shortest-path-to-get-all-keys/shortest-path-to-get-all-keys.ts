class Point {
    hash: string;
    constructor(
        public x: number,
        public y: number,
        public keys: string = '',
    ) {
        this.hash = `[${this.x}-${this.y}-${this.keys}]`;
    }

    canUnlock(char: string) {
        return this.keys.indexOf(char.toLowerCase()) >= 0;
    }
}


function findStartPoint(grid: string[]): Point | undefined {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '@') {
                return new Point(i, j);
            }
        }
    }

    return undefined;
}

function findAllKeys(grid: string[]): number {
    let result = 0;

    grid.forEach((line) => {
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if ('@.#'.indexOf(char) >= 0) {
                continue;
            }
            
            const isLower = char.charCodeAt(0) > 96;

            if (!isLower) {
                continue;
            }

            result += 1;
        }
    })

    return result;
}

function isKey(char: string): boolean {
    const code = char.charCodeAt(0);
    return code > 96 && code < 123; 
}

function isLock(char: string): boolean {
    const code = char.charCodeAt(0);
    return code > 64 && code < 91; 
}

function isWall(char: string): boolean {
    return char === '#';
}

function shortestPathAllKeys(grid: string[]): number {
    const startPoint = findStartPoint(grid);
    if (!startPoint) return -1;

    const allKeysCount = findAllKeys(grid);
    const visited = {};
    const direction: [number, number][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    let queue: Point[] = [startPoint];

    let visitCount = 0;

    while (queue.length > 0) {

        const inLoop = [...queue];
        queue = [];

        for (const next of inLoop) {

            for (const di of direction) {
                const newX = next.x + di[0];
                const newY = next.y + di[1];

                const char = grid[newX] && grid[newX][newY];
                const point = new Point(newX, newY, next.keys);

                if (!char || isWall(char) || visited[point.hash]) {
                    continue;
                }

                if (isKey(char)) {
                    if (point.keys.indexOf(char) < 0) {
                        point.keys += char;
                    }

                    if (allKeysCount === point.keys.length) {
                        return visitCount + 1;
                    }
                }

                if (isLock(char)) {
                    if (!point.canUnlock(char)) {
                        continue;
                    }
                }

                visited[point.hash] = true;
                queue.push(point);
            }
        }

        visitCount += 1;
    }

    return -1;
};