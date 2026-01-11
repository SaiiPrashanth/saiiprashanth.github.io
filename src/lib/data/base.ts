const firstName = 'Sai';
const lastName = 'Prashanth';
const suffix = 'Sai Prashanth';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
