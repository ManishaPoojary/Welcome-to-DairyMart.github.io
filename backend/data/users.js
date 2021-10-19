import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Raj Kundra",
    email: "Raj@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Shilpa shetty",
    email: "shilpa@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
