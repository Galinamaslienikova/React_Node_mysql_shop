


export function getAllProducts(page){
    return fetch(`/catalog/${page}`)
    .then(res=>res.json());
}
export function getAllProduct(){
    return fetch(`/catalog`)
    .then(res=>res.json());
}
export function getProduct(id){
    return fetch(`/catalog/product/${id}`)
    .then(res=>res.json());
}
export function getCategories(){
    return fetch('/categories')
    .then(res=>res.json());
}
export function getOneCategory(id,page){
    return fetch(`/categories/${id}/${page}`)
    .then(res=>res.json());
}
export function getOneCategories(id){
    return fetch(`/categories/${id}`)
    .then(res=>res.json());
}
export function getTypes(){
    return fetch('/type')
    .then(res=>res.json());
}
export function getTypePages(id,page){
    return fetch(`/type/${id}/${page}`)
    .then(res=>res.json());
}
export function getOneTypes(id){
    return fetch(`/type/${id}`)
    .then(res=>res.json());
}
export function getTypeName(id){
    return fetch(`/tepe/${id}`)
    .then(res=>res.json());
}
export function getCategoryToTshirt(id){
    return fetch(`/thirtsCategory/${id}`)
    .then(res=>res.json());
}
export function getProductVariants(id){
    return fetch(`/variants/${id}`)
    .then(res=>res.json());
}
export function getUserFromCart(id){
    return fetch(`/cartClient/${id}`)
    .then(res=>res.json());
}
export function getTotalFromCart(id){
    return fetch(`/cartTotal/${id}`)
    .then(res=>res.json());
}

export function getProdVarInCarts(id_client){
    return fetch(`/productInCart/${id_client}`)
    .then(res=>res.json());
}
export function getClient(id_client){
    return fetch(`/client/${id_client}`)
    .then(res=>res.json());
}
export function getUserOrders(id_client){
    return fetch(`/userOrders/${id_client}`)
    .then(res=>res.json());
}
export function getUserOrder(id_client,id_order){
    return fetch(`/userOrder/${id_client}/${id_order}`)
    .then(res=>res.json());
}
export function getOneProduct(id_product){
    return fetch(`/oneProduct/${id_product}`)
    .then(res=>res.json());
    
}
export function getCatName(id_client){
    return fetch(`/cat/${id_client}`)
    .then(res=>res.json());
    
}




