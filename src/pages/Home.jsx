import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Home/Banner';
import Funciton_card from '../components/Function_card';
import Card from '../components/Card';
function Home() {
    return (
        <div>
            <Header />
            <section className="px-6">
                <Banner />
                <Funciton_card />
                <Card />
            </section>
            <Footer />
        </div>
    );
} export default Home;