import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Home/Banner';
import Funciton_card from '../components/Function_card';
import Card_set from '../components/Card_set';
function Home() {
    return (
        <div>
            <Header />
            <section className="px-6">
                <Banner />
                <Funciton_card />
                <div className='max-w-screen-xl flex flex-row items-center justify-center relative w-full mx-auto overflow-hidden my-5  '>
                <h3 className='text-our-md'>推薦食間</h3>
                </div>
                <div className="max-w-screen-xl flex flex-row items-center justify-center relative w-full mx-auto overflow-hidden my-10 ">
                    <div className="overflow-x-auto scrollbar-hide">
                      <Card_set className="flex flex-row gap-4 w-fit mb-6" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
} export default Home;