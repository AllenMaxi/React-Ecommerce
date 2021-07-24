import { products } from 'helpers/data';

const filterProduct = products;

const product = new Promise(res => {
    res(filterProduct)
}, 2000 )

export const getProducts = () => {
    return(
        product
    )
}
