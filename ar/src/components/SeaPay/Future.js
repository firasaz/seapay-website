import 'assets/css/seapay.css';


const Future = ({ title, description, image, style }) => {
    return (
        <>
            <div className='col-sm' style={{ maxWidth: 350, paddingTop: 30, paddingBottom: 20, ...style }}>
                <div style={{ paddingBottom: 30 }}>
                    <img src={image} width='50px' alt="test" />
                </div>
                <h2 style={{ fontWeight: "bold", paddingBottom: 20 }}>
                    {title}
                </h2>
                <h5 style={{}}>
                    {description}
                </h5>
            </div>
        </>
    );
};

export default Future;
