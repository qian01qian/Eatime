import Header from '../components/Header'
import Footer from '../components/Footer'
import Page_banner from '../components/Page_banner';
import Feature_Wheel from '../components/Feature_Wheel';

function Wheel() {
    return (
        <>
            <Header />
            <section className="px-6">
                <Page_banner image="/wheel.jpg" title="命運食間" />
                <Feature_Wheel />
            </section>
            <Footer />
        </>
    );
} export default Wheel;