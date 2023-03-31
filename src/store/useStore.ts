import { create } from "zustand";

type TempoEntry = {
	note: string;
	value: string;
	position: number;
};

interface Store {
	visibleMenu: string;
	setVisibleMenu: (menu: string) => void;

	activeInstrument: string;
	setActiveInstrument: (instrument: string) => void;

	selectedNotes: { [key: string]: string };
	setSelectedNotes: (notes: { [key: string]: string }) => void;

	tempoValue: string;
	setTempoValue: (tempo: string) => void;

	selectedIndex: number | null;
	setSelectedIndex: (index: number | null) => void;

	tempoLists: { [key: string]: TempoEntry[] };
	setTempoLists: (lists: { [key: string]: TempoEntry[] }) => void;

	isTempoExist: boolean;
	setIsTempoExist: (exist: boolean) => void;
}

export const useStore = create<Store>((set) => ({
	visibleMenu: "settings",
	setVisibleMenu: (menu: string) => set(() => ({ visibleMenu: menu })),

	activeInstrument: "",
	setActiveInstrument: (instrument: string) =>
		set(() => ({ activeInstrument: instrument })),

	selectedNotes: {
		piano: "DO",
		cymbale: "CRASH",
		timbale: "BONGO",
		guitare: "GUITARE",
		bois: "HARMONICA",
		vent: "FLUTE",
		divers: "MARACAS1",
		oiseau: "MOINEAU",
		mammifere: "CHAT",
	},
	setSelectedNotes: (notes) => set(() => ({ selectedNotes: notes })),

	tempoValue: "",
	setTempoValue: (tempo: string) => set(() => ({ tempoValue: tempo })),

	selectedIndex: null,
	setSelectedIndex: (index) => set(() => ({ selectedIndex: index })),

	tempoLists: {
		piano: [],
		cymbale: [],
		timbale: [],
		guitare: [],
		bois: [],
		vent: [],
		divers: [],
		oiseau: [],
		mammifere: [],
	},
	setTempoLists: (lists) => set(() => ({ tempoLists: lists })),

	isTempoExist: false,
	setIsTempoExist: (exist) => set(() => ({ isTempoExist: exist })),
}));
