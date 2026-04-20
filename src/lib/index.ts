import configJson from '$root/config.json' with { type: 'json' };
import shuttlesJson from '$lib/data/shuttles.json' with { type: 'json' };

export type ShuttleGroup = keyof typeof configJson.shuttles.shipyard;
export type ShuttleClass = keyof typeof configJson.shuttles.classes;
export type ShuttleEngine = keyof typeof configJson.shuttles.engines;
export type ShuttleSize = keyof typeof configJson.shuttles.sizes;

export interface Shuttle {
	id: string;
	name: string;
	description: string;
	price: number;
	group: ShuttleGroup;
	size: ShuttleSize;
	classes: ShuttleClass[];
	engines: ShuttleEngine[];
	image: string;
}

export interface ShuttleFilters {
	name: string;
	group: ShuttleGroup | '';
	shuttleClass: ShuttleClass[];
	engine: ShuttleEngine | '';
}

const shuttleData = shuttlesJson as Shuttle[];

export const defaultShuttleFilters: ShuttleFilters = {
	name: '',
	group: '',
	shuttleClass: [],
	engine: ''
};

export function getShuttles(): Shuttle[] {
	return shuttleData;
}

export function getShuttleById(id: string): Shuttle | undefined {
	return shuttleData.find((shuttle) => shuttle.id === id);
}

function includesSearch(haystack: string, needle: string): boolean {
	return haystack.toLowerCase().includes(needle.trim().toLowerCase());
}

export function filterShuttles(shuttles: Shuttle[], filters: ShuttleFilters): Shuttle[] {
	return shuttles.filter((shuttle) => {
		if (filters.name && !includesSearch(shuttle.name, filters.name)) {
			return false;
		}

		if (filters.group && shuttle.group !== filters.group) {
			return false;
		}

		if (filters.shuttleClass.length > 0 && !filters.shuttleClass.every((c) => shuttle.classes.includes(c))) {
			return false;
		}

		if (filters.engine && !shuttle.engines.includes(filters.engine)) {
			return false;
		}

		return true;
	});
}

export function formatPrice(price: number): string {
	return new Intl.NumberFormat('ru-RU').format(price);
}

export const shuttleConfig = configJson.shuttles;
export const shuttleGroupColors = configJson.shipyard;
