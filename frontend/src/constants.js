export const BASE_URL = process.env.NODE_ENV === 'developement' ? 'http://localhost:5000' : ''; // if in development mode, use localhost:5000, else use the current URL;
export const PRODUCTS_URL = '/api/products';// '/api/products' is the URL for the products
export const USERS_URL = '/api/users';  
export const ORDERS_URL = '/api/orders';   
export const PAYPAL_URL = '/api/config/paypal';  

