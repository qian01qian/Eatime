import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Home/Banner';
import Funciton_card from '../components/Function_card';
function Home() {
    return (
        <div>
            <Header />
            <section>
                <Banner />
                <Funciton_card />
            </section>
            <Footer />
        </div>
    );
} export default Home;