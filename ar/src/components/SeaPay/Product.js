import 'assets/css/seapay.css';


const Product = ({ title, description, img }) => {
    return (
        <>
            <div className='card col-sm p-3 md:p-4'>
                {img && (
                    <div style={{ maxWidth: 500 }}>
                        <img style={{ maxWidth: '100%' }} src={img} alt="test" />
                    </div>
                )}
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
