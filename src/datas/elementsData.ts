import { StaticImageData } from "next/image";
import Piano from "../assets/Piano.png";
import Maracas1 from "../assets/Maracas1.png";
import Maracas2 from "../assets/Maracas2.png";
import Guitare from "../assets/Guitare.png";
import GuitareE from "../assets/GuitareE.png";
import Violon from "../assets/Violon.png";
import Cymbale from "../assets/cymbale.png";
import Timbale from "../assets/timbale.png";
import Chat from "../assets/Chat.png";
import Vache from "../assets/Vache.png";
import Chouette from "../assets/Chouette.png";
import ChauveSouris from "../assets/ChauveSouris.png";
import Pinson from "../assets/Pinson.png";
import Moineau from "../assets/Moineau.png";
import Triangle from "../assets/Triangle.png";
import Harmonica from "../assets/Harmonica.png";
import Accordeon from "../assets/Accordeon.png";
import Flute from "../assets/Flute.png";
import Trompette from "../assets/Trompette.png";
import MiniGuitare from "../assets/MiniGuitare.png";

interface Element {
    id : string;
    category : string;
    note : string;
    src : StaticImageData;
    alt : string;
};

export const wallInstruments: Element[] = [
	{
		id: "guitare",
		category: "guitare",
		note: "NORMALE",
		src: Guitare,
		alt: "Guitare",
	},
	{
		id: "violon",
		category: "guitare",
		note: "VIOLON",
		src: Violon,
		alt: "Violon",
	},
	{
		id: "cymbale",
		category: "cymbale",
		note: "CRASH",
		src: Cymbale,
		alt: "Cymbale",
	},
	{
		id: "timbale",
		category: "timbale",
		note: "BONGO",
		src: Timbale,
		alt: "Timbale",
	},
];

export const shelfInstruments: Element[] = [
	{
		id: "piano",
		category: "piano",
		note: "DO",
		src: Piano,
		alt: "Piano",
	},
	{
		id: "harmonica",
		category: "bois",
		note: "HARMONICA",
		src: Harmonica,
		alt: "Harmonica",
	},
	{
		id: "accordeon",
		category: "bois",
		note: "ACCORDEON",
		src: Accordeon,
		alt: "Accordeon",
	},
	{
		id: "maracas1",
		category: "divers",
		note: "MARACAS1",
		src: Maracas1,
		alt: "Maracas1",
	},
	{
		id: "maracas2",
		category: "divers",
		note: "MARACAS2",
		src: Maracas2,
		alt: "Maracas2",
	},
	{
		id: "trompette",
		category: "vent",
		note: "TROMPETTE",
		src: Trompette,
		alt: "Trompette",
	},
	{
		id: "flute",
		category: "vent",
		note: "FLUTE",
		src: Flute,
		alt: "Flute",
	},
	{
		id: "triangle",
		category: "divers",
		note: "TRIANGLE",
		src: Triangle,
		alt: "Triangle",
	},
	{
		id: "guitareE",
		category: "guitare",
		note: "ELECTRIQUE",
		src: GuitareE,
		alt: "GuitareE",
	},
	{
		id: "miniGuitare",
		category: "guitare",
		note: "MANDOLINE",
		src: MiniGuitare,
		alt: "MiniGuitare",
	},
];

export const grassInstruments: Element[] = [
	{
		id: "chat",
		category: "mammifere",
		note: "CHAT",
		src: Chat,
		alt: "Chat",
	},
	{
		id: "vache",
		category: "mammifere",
		note: "VACHE",
		src: Vache,
		alt: "Vache",
	},
];

export const treeInstruments: Element[] = [
	{
		id: "chouette",
		category: "oiseau",
		note: "CHOUETTE",
		src: Chouette,
		alt: "Chouette",
	},
	{
		id: "roussette",
		category: "mammifere",
		note: "ROUSSETTE",
		src: ChauveSouris,
		alt: "ChauveSouris",
	},
	{
		id: "pinson",
		category: "oiseau",
		note: "PINSON",
		src: Pinson,
		alt: "Pinson",
	},
	{
		id: "moineau",
		category: "oiseau",
		note: "MOINEAU",
		src: Moineau,
		alt: "Moineau",
	},
];