console.log('start')
const brands = ['BMW', 'Tesla', 'Mercedes'];

function getBrands(callback){
    setTimeOut(() => {
    console.log('WE GOT OUR DATA');
    return brands
    },1000)
}
function getModel(brand){
    setTimeOut(() => {
        console.log('we got our model');
        return brands
        },1000)
}
getBrands((brandsResponse) => {
    console.log(brandsResponse);
});
console.log(getModel)
console.log('end')
