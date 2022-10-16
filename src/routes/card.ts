export type Suit = 'Club' | 'Diamond' | 'Spade' | 'Heart';
export type Rank =
	| 'Two'
	| 'Three'
	| 'Four'
	| 'Five'
	| 'Six'
	| 'Seven'
	| 'Eight'
	| 'Nine'
	| 'Ten'
	| 'Jack'
	| 'Queen'
	| 'King'
	| 'Ace';

export interface Card {
	suit: Suit;
	rank: Rank;
}
export type Hand = Card[];
export type Deck = Card[];
export interface Player {
	name: string;
	hand: Hand;
}

export interface Game {
	deck: Deck;
	players: Player[];
}

export type ShuffledDeck = Card[];
export type Deal = (shuffledDeck: ShuffledDeck) => { shuffledDeck: ShuffledDeck; card: Card };
export type Shuffle = (deck: Deck) => ShuffledDeck;
export type PickupCard = (hand: Hand, card: Card) => Hand; // i used parameters type as list instead of tuple
