type Suit = "Club" | "Diamond" | "Spade" | "Heart";
type Rank =  "Two" | "Three" | "Four" | "Five" | "Six" | "Seven" | "Eight" | "Nine" | "Ten" | "Jack" | "Queen" | "King" | "Ace"
type Card = [Suit, Rank] // tuples are not available in ts that's why i used list instead of tuple

type Hand = Card[]
type Deck = Card[]
type Player = { name: string, hand: Hand} 
type Game =  { Deck: Deck; Players: Player[] }


type Deal = (deck: ShuffledDeck) => [ShuffledDeck, Card] // i used return type as list instead of tuple
type ShuffledDeck = Card[]
type Shuffle = (deck: Deck) => ShuffledDeck
type PickupCard = (list: [Hand, Card]) => Hand // i used parameters type as list instead of tuple