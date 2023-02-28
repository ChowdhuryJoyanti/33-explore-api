const user = {id:1, name:'Gorib amir',job:'actor'};
// javascript objects notation(json)
const stringified = JSON.stringify(user);

console.log(user);
console.log(stringified);

// { id: 1, name: 'Gorib amir', job: 'actor' }
// {"id":1,"name":"Gorib amir","job":"actor"}

const shop = {
    owner : 'Alia',
    address: {
        street : 'kochukhet voot er goli',
        city : 'ranbir',
        country : 'BD'

    },
    products: ['laptop', 'maic', 'monitor' , 'keyboard'],
    revenew : 45000,
    isOpen :true,
    isNew : false
};
console.log(shop);



const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopobj = JSON.parse(shopJSON);
console.log(shopobj)