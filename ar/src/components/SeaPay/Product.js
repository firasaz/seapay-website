import 'assets/css/seapay.css';


const Product = ({ title, description, image }) => {
    return (
        <>
            <div className='card col-sm p-3 md:p-4'>
                <div style={{ maxWidth: 500 }}>
                    <img style={{ maxWidth: '100%' }} src={image} alt="test" />
                </div>
                <div style={{ fontWeight: "bold", color: "black", paddingBottom: 20, paddingTop: 20 }}>
                    <a href='#'>{title}</a>
                </div>
                <div style={{}}>
                    {description}
                </div>
            </div>
        </>
    );
};

export default Product;
