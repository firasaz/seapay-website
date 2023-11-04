import 'assets/css/seapay.css';


const Future = ({ title, description, image }) => {
    return (
        <>
            <div className='col-sm' style={{ maxWidth: 350, paddingTop: 30, paddingBottom: 20 }}>
                <div style={{ paddingBottom: 30 }}>
                    <img src={image} alt="test" />
                </div>
                <div style={{ fontWeight: "bold", color: "black", paddingBottom: 20 }}>
                    {title}
                </div>
                <div style={{}}>
                    {description}
                </div>
            </div>
        </>
    );
};

export default Future;
