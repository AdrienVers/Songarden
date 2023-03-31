interface Instrument {
	name: string;
	notes: string[];
	square: string;
	squareBlink: string;
}

export const instruments: Instrument[] = [
	{
		name: "piano",
		notes: ["DO", "RE", "MI", "FA", "SOL", "LA", "SI"],
		square: "square1",
		squareBlink: "square1Blink",
	},
	{
		name: "cymbale",
		notes: ["CRASH", "SPLASH", "BAGUETTE"],
		square: "square2",
		squareBlink: "square2Blink",
	},
	{
		name: "timbale",
		notes: ["BONGO", "CAISSE", "TUMBA", "UDU"],
		square: "square3",
		squareBlink: "square3Blink",
	},
	{
		name: "guitare",
		notes: ["NORMALE", "ELECTRIQUE", "MANDOLINE"],
		square: "square4",
		squareBlink: "square4Blink",
	},
	{
		name: "bois",
		notes: ["HARMONICA", "ACCORDEON"],
		square: "square5",
		squareBlink: "square5Blink",
	},
	{
		name: "vent",
		notes: ["FLUTE", "TROMPETTE"],
		square: "square6",
		squareBlink: "square6Blink",
	},
	{
		name: "divers",
		notes: ["MARACAS1", "MARACAS2", "TRIANGLE", "VIOLON"],
		square: "square7",
		squareBlink: "square7Blink",
	},
	{
		name: "oiseau",
		notes: ["MOINEAU", "CHOUETTE", "PINSON"],
		square: "square8",
		squareBlink: "square8Blink",
	},
	{
		name: "mammifere",
		notes: ["CHAT", "ROUSSETTE", "VACHE"],
		square: "square9",
		squareBlink: "square9Blink",
	},
];
