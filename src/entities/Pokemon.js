export class Pokemon {
	constructor(info) {
		this['Image URL'] = info.imgUrl;
		this['Name'] = info.name;
		this['Number'] = info.number;
		this['Type'] = info.type;
		this['Abilities'] = info.abilities;
		this['Flavor Text'] = info.flavorText;
		this['Habitat'] = info.habitat;
		this['Shape'] = info.shape;
		this['Evolves From'] = info.evolvesFrom;
		this['Evolves To'] = info.evolvesTo;
	}
}
