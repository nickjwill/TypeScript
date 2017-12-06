function profile(user) {
    // next line uses back ticks ` `
    return "Welcome, " + user.firstName + " " + user.lastName;
}
var realUser = {
    email: 'test@test.com',
    firstName: 'Nick',
    lastName: 'Williams'
};
console.log(profile(realUser));
console.log(realUser.email);
//# sourceMappingURL=023_interfaces.js.map