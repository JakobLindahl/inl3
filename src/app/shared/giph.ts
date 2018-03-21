export interface Giph {
    image: string;
}

export interface GiphTrendingArray {
    updateTrending(data: Array<Giph>);
}

export interface GiphRandom {
    updateRandom(giph: Giph);
}