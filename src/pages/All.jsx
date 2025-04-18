import Header from '../components/Header'
import Footer from '../components/Footer'
import Page_banner from '../components/Page_banner';
import Card_key from '../components/Card_set';
function Full() {
    return (
        <>
            <Header />
            <Page_banner image="/Fortune.jpg" title="全部食間" />


            <div className="max-w-screen-xl flex flex-row items-center justify-center relative w-full mx-auto overflow-hidden my-10 ">
                <div className='w-1/3 '><h2>filter</h2></div>
                <div className="w-2/3 px-6">
                    <Card_key className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" />
                </div>
            </div>
            <Footer />
        </>
    );
} export default Full;