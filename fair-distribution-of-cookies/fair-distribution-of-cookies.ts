function distributeCookies(cookies: number[], k: number): number {
    let min: number = Number.MAX_SAFE_INTEGER;

    interface helper {
        (bags: number[], dist: number[]) : void;
    }

    const helper = (bags: number[], children: number[]): void => {
        if (bags.length === 0) return;
        const bag = bags.pop();
        for (let i: number = 0; i < children.length; i++) {
            children[i] += bag;
            if (bags.length === 0) {
                let unfairness: number = Math.max(...children);
                min = Math.min(min, unfairness);
            }
            helper(bags, children);
            children[i] -= bag;
        }
        bags.push(bag);
    }

    let children: number[] = new Array(k).fill(0);

    helper(cookies, children);

    return min;
};