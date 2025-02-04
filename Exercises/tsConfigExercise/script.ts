function sum(a: number, b: number): number {
    return a + b;
}

function returnRandomItem<T>(arr: T[]): T {
    const randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx]
}