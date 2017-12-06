interface User {
	email : string;
	firstName : string;
	lastName : string;
}

function profile(user: User) : string {
	// next line uses back ticks ` `
	return `Welcome, ${user.firstName} ${user.lastName}`; 
}

var realUser = {
	email: 'test@test.com',
	firstName: 'Nick',
	lastName: 'Williams'
};

console.log(profile(realUser));
console.log(realUser.email);