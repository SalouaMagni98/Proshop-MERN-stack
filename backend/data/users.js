import bcrypt from 'bcryptjs';

const users = [
{
    name:'Admin User',
    email:'admin@email.com',
    password: bcrypt.hashSync('123456',10),
    admin: true,   
},

{
    name:'John Doe',
    email:'john@email.com',
    password: bcrypt.hashSync('123456',10),
    admin: false,   
},

{
    name:'Jane Doe',
    email:'jane@email.com',
    password: bcrypt.hashSync('123456',10),
    admin: false,   
},

];

export default users;
