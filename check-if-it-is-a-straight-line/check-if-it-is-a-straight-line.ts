function checkStraightLine(coordinates: number[][]): boolean {
    if(coordinates.length === 2) return true
    if(coordinates === null || coordinates[0].length === 0) return false;
    const [[x1, y1], [x2 , y2]] = coordinates;
    const dx = x2 - x1, dy = y2 - y1;

    return coordinates.every(([x, y]) => (dx * (y - y1)) === (dy * (x - x1)));
};