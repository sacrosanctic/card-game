export type Opaque<K, T> = T & { OPAQUE?: K };

export type Suit = 'Club' | 'Diamond' | 'Spade' | 'Heart';
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export interface Card {
	suit: Suit;
	rank: Rank;
}
export type Hand = Card[];
export interface Player {
	name: string;
	hand: Hand;
}
export interface Game {
	deck: Deck;
	players: Player[];
}

export type Deck = Opaque<'Deck', Card[]>;
export type ShuffledDeck = Opaque<'ShuffledDeck', Card[]>;

export type Deal = (shuffledDeck: ShuffledDeck) => { shuffledDeck: ShuffledDeck; card: Card };
export type Shuffle = (deck: Deck) => ShuffledDeck;
export type PickupCard = (hand: Hand, card: Card) => Hand;
