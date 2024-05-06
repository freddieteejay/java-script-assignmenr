const {add, multi,div, sub, root, mode} = require ("./fareedah.js");


test("my test ", ()  => {
let sum = add(2,3)
expect(sum) === 5;

});

test("my second test", () =>{
let product = multi(10, 5)
expect(product) === 50;
//expect(product).toBe(50);

})

test("my divides", () =>{
let ans = div(100, 2)
expect(ans).toBe(50);

})

test("my subs", () => {
let ans = sub(1000, 500)
expect(ans)=== 500;
})

test("my root", ()=>{
let ans = root(2, 3)
expect(ans) === 8;
})

test("my modex", () =>{
let ans = mode(2, 5)
expect(ans) === 2;


})
