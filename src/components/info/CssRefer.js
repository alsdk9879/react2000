import React from "react";
import axios from "axios";
import ReferInfoCss from "../info/ReferInfoCss";

class CssRefer extends React.Component {

    state = {
        refers: []
    }

    getRefer = async () => {
        const {
            data: {
                data: {cssRefer},
            },
        } = await axios.get("https://alsdk9879.github.io/react998_11/src/assets/json/css.json");
        this.setState({refers: cssRefer, isLoading: false})

        console.log(cssRefer);
    }

    componentDidMount(){
        this.getRefer();
    }

    render(){
        const {refers} = this.state;
        return (
            <ul>
                {refers.map((refer) => (
                    <ReferInfoCss 
                        key={refer.id}
                        link={refer.link}
                        id={refer.id}
                        title={refer.title}
                        desc1={refer.desc1}
                        desc2={refer.desc2}
                        default1={refer.default1}
                        apply={refer.apply}
                        version={refer.version}
                        use={refer.use}
                        definition={refer.definition}
                    />
                ))}
            </ul>
        )
    }
}

export default CssRefer;