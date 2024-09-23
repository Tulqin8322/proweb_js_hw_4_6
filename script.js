const users={};


for (let i = 0; i < 10; i++) {
  const user={
    id: i + 1,
    name: prompt("Ism kiriting"),
    age: prompt("Yosh kiriting"),
  }
  users[i]=user;
}

console.log(users)

console.log("Foydalanuvchi " + users[2].id);
console.log("Ismi " + users[2].name);
console.log("Yoshi " + users[2].age);

console.log("Foydalanuvchi " + users[3].id);
console.log("Ismi " + users[3].name);
console.log("Yoshi " + users[3].age);

for (const key in users) {
  console.log("");
  console.log("Foydalanuvchi " + users[key].id);
  console.log("Ismi " + users[key].name);
  console.log("Yoshi " + users[key].age);
}




