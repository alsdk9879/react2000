import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';
import WrapTitle from '../layouts/WrapTitle';
import ContInfo from '../layouts/ContInfo';
import PortInfo from '../info/PortInfo';
import axios from "axios";
import Loading from '../layouts/Loading';
class Portfolio extends React.Component {
    state = {
        isLoading: true,    //변수에 저장
        ports : []
    }
    getPorts = async () => {
        const {
            data: {
                data: {ports},
            },
        } = await axios.get("https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json");
        // console.log(ports);
        // console.log(ports.data.data.ports);
        this.setState({ ports, isLoading: false})
    }
    componentDidMount(){
        setTimeout(() => {
            // this.setState({isLoading: false});
            this.getPorts();
        }, 3000);
    }   //사이트가 다 로딩되면 3초후 실행
    render(){
        const { isLoading, ports } = this.state;
        return (
            <div>
                {isLoading ? (
                    <Loading />
                //    <div className="loading">
                //        <span>로딩중...</span>
                //    </div> 
                ) : (
                    <div>
                        <Header />
                        <Contents>
                        <section id="portCont">
                            <div class="container">
                                <WrapTitle text={['portfolio', 'site']} />
                                <div class="port__cont">
                                    {ports.map((port) => (
                                        <PortInfo 
                                            key={port.id}
                                            id={port.id}
                                            title={port.title}
                                            category={port.category}
                                            link={port.link}
                                            image={port.image}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                        <ContInfo />
                        </Contents>
                        <Footer />
                    </div>
                )}
            </div>
        )
    }
}
// function Portfolio(){
//     return (
        // <div>
        //     <Header />
        //     <Contents>
        //     <section id="portCont">
        //         <div class="container">
        //             <WrapTitle text={['portfolio', 'site']} />
        //             <div class="port__cont">
        //             </div>
        //         </div>
        //     </section>
        //     </Contents>
        //     <Footer />
        // </div>
//     )
// }
export default Portfolio;