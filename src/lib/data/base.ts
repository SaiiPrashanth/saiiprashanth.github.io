const firstName = 'Sai';
const lastName = 'Prashanth';
const suffix = 'Slick Portfolio With Svelte 5';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
