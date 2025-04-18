import Header from '../components/Header'
import Footer from '../components/Footer'
import Filter from '../components/Filter';
import { useSelector } from 'react-redux';
import { selectFiltA } from '../redux/filterAllSlice';
import Page_banner from '../components/Page_banner';
import Card_key from '../components/Card_set';
function Full() {
    const filtAState = useSelector(selectFiltA)

    return (
        <>
            <Header />
            <section className="px-6">
                <Page_banner image="/Fortune.jpg" title="全部食間" />


                <div className="max-w-screen-xl flex flex-row items-start justify-center relative w-full mx-auto overflow-hidden my-10 ">
                    <Filter state={filtAState} className='w-1/3'/>
                    <div className="w-2/3 px-6">
                        <Card_key className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" pick={filtAState}/>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    );
    
} export default Full;