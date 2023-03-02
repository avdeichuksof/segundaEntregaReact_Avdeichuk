import './itemDetail.css';

const ItemDetail = ({data}) => {
    
    return (
        <div className='cardDetail'> 
                <img className='imgDetail' src={data.img} alt={data.title} />
                <div className='bodyDetail'> 
                    <p className='titleDetail'>Producto: {data.title}</p>
                    <p className='priceDetails'>Precio: ${data.price}</p>
                </div>
        </div>
    );
};

export default ItemDetail;