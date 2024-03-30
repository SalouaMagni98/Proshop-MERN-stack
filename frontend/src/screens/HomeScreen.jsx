import { Row, Col } from 'react-bootstrap';
import React from 'react';
import Product from '../components/Product';
import {useGetProductsQuery} from '../slices/productsApiSlice';

function HomeScreen() {
    const { data: products, isLoading, error} = useGetProductsQuery();
 

    return (
        <>
        { isLoading ? (<h2> Loading... </h2>) : error ? (<div>
            {error?.data?.message || error.data}  </div>) : (<>
         <h1>Latest Products</h1>
         <Row>
             {products.map((product) => (
                 <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                     <Product product={product} />
                 </Col>
             )

             )}
         </Row>
        
        </>)}
           
        </>
    );
};

export default HomeScreen