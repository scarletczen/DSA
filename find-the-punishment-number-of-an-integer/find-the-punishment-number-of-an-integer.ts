function punishmentNumber(n:number):number{
    let res = 0;
    for (let i = 1; i <= n; i++) {
        let check = go(i, (i * i) + "");
        if (check) {
            res += i * i;
        }
    }
    return res;
};

let s, n, work, x;
function go(X, S){
    s = S;
    x = X;
    n = s.length;
    work = false;
    dfs(0, []);
    return work;
};

const dfs = (pos, cur) => {
    if (pos == n && ok(cur)) { // pos/index reachs end, valid partition
        work = true;
        return;
    }
    for (let i = pos; i < n; i++) {
        if (work) break; // already valid, no need further checking
        let next = s.slice(pos, i + 1);
        cur.push(next);
        dfs(i + 1, cur);
        cur.pop();
    }
};

const ok = (a) => {
    let sum = 0;
    for (const s of a) sum += Number(s);
    return sum == x;
};