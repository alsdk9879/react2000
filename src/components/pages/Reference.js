import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Contents from "../layouts/Contents";
import Loading from "../layouts/Loading";
import WrapTitle from "../layouts/WrapTitle";
// import ReferInfo from "../info/ReferInfo";
import HtmlRefer from "../info/HtmlRefer";
import CssRefer from "../info/CssRefer";
import JsRefer from "../info/JsRefer";
import ContInfo from "../layouts/ContInfo";
import axios from "axios";

const obj = {
    0: <HtmlRefer />, 
    1: <CssRefer />,
    2: <JsRefer />
}

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
        activeTab: 0
    }

    clickHandler = (id) => {
        // e.preventDefault()
        this.setState({activeTab: id})
    }

    getRefer = async () => {
        const {
            data: {
                data: {htmlRefer},
            },
        } = await axios.get("https://alsdk9879.github.io/react998_11/src/assets/json/refer.json");
        this.setState({refers: htmlRefer, isLoading: false})

        console.log(htmlRefer);
    }

    componentDidMount(){
        setTimeout(() => {
            this.getRefer();
        }, 2000)
    }

    render(){
        const {isLoading} = this.state;

        return (
            <div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div>
                        <Header />
                        <Contents>
                            <section id="referCont">
                                <div className="container">
                                    <WrapTitle text={['Reference', 'Book']} />
                                    <div className="refer__cont">
                                        <div className="table">
                                            <h3 className={this.state.activeTab === 0 ? "active" : ""} onClick={() => this.clickHandler(0)}>Html</h3>
                                            <h3 className={this.state.activeTab === 1 ? "active" : ""} onClick={() => this.clickHandler(1)}>Css</h3>
                                            <h3 className={this.state.activeTab === 2 ? "active" : ""} onClick={() => this.clickHandler(2)}>Js</h3>
                                            <ul>
                                                {obj[this.state.activeTab]}
                                            </ul>
                                        </div>
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

export default Reference;