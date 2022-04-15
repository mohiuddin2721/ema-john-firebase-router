import './Home.css';
import Banner from '../Banner/Banner';
import HomeProduct from '../HomeProduct/HomeProduct';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: 'ULTRABOOST 22 SHOES', price: 975, ratings: 5, img: 'https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?t=st=1650052864~exp=1650053464~hmac=a7993a62dc369b7af4a5f4c78ab0c9912886f79fbb853e125112e328f7192959&w=740' },
    { id: 2, name: 'TIRO TRACK PANTS', price: 750, ratings: 5, img: 'https://img.freepik.com/free-psd/beige-shorts-mockup-man_53876-98660.jpg?t=st=1650052897~exp=1650053497~hmac=6dcc2e7d893dc20387f1102de25d9141195792b55b7db6223aa35e7b84b66612&w=740' },
    { id: 3, name: 'RESPONSE 3MC ADV BOOTS', price: 1550, ratings: 5, img: 'https://img.freepik.com/free-psd/militar-boots-mockup_1310-779.jpg?t=st=1650052952~exp=1650053552~hmac=1351cd3f20348abffe7002b4e3abf2fa07e167a409eee3a3b1ae114bcfb1c058&w=740' },
    { id: 4, name: 'MOVE FEELREADY SPORT TEE', price: 400, ratings: 5, img: 'https://img.freepik.com/free-vector/t-shirt-polo-sport-design-badminton-jersey-mockup-uniform-template_206253-375.jpg?w=740' },
    { id: 5, name: 'Trefoil Backpack', price: 1200, ratings: 5, img: 'https://img.freepik.com/free-psd/backpack-object-transparent-psd_7939-4501.jpg?w=740' },
    { id: 6, name: 'Icon Snapback Hat', price: 150, ratings: 5, img: 'https://img.freepik.com/free-vector/baseball-cap-illustration_284092-809.jpg?w=740' },
    { id: 7, name: 'Steel Metal Bottle 1L', price: 142, ratings: 5, img: 'https://img.freepik.com/free-psd/metal-flask-bottle-mockup_439185-1343.jpg?t=st=1650052823~exp=1650053423~hmac=3f762d693d2ade9fe63f3b20356de6ed326590507149afb02d745bf47947e634&w=740' },
    { id: 8, name: 'True Wireless Earbuds', price: 800, ratings: 5, img: 'https://img.freepik.com/free-photo/desk-gadgets_181624-23300.jpg?t=st=1650053905~exp=1650054505~hmac=5a92e68c2e7bc977094986bf31a69e2cab2126bf42aa0ed8f8e9f2626b4254a4&w=740' },
]

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='container'>
                <h2 className='text-primary text-center m-3'>All Beautiful Products</h2>
                <div className='row'>
                    {
                        products.map(product => <HomeProduct
                            key={product.id}
                            product={product}
                        ></HomeProduct>)
                    }
                </div>
                <p><Link to="/shop" className='text-primary text-center d-block fs-4 text-decoration-none'>See mor products</Link> </p>
            </div>
        </div>
    );
};

export default Home;