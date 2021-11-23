import React from "react";
import axios from "axios";
import ReferInfo from "../info/ReferInfo";

class HtmlRefer extends React.Component {

    state = {
        refers: []
    }

    getRefer = async () => {
        const {
            data: {
                data: {htmlRefer},
            },
        } = await axios.get("https://raw.githubusercontent.com/alsdk9879/react998_11/master/src/assets/json/html.json");
        this.setState({refers: htmlRefer, isLoading: false})

        console.log(htmlRefer);
    }

    componentDidMount(){
        this.getRefer();
    }

    render(){
        const {refers} = this.state;
        return (
            <ul>
                {refers.map((refer) => (
                    <ReferInfo 
                        key={refer.id}
                        link={refer.link}
                        id={refer.id}
                        title={refer.title}
                        desc1={refer.desc1}
                        desc2={refer.desc2}
                        element={refer.element}
                        use={refer.use}
                        tag={refer.tag}
                        version={refer.version}
                        view={refer.view}
                        definition={refer.definition}
                    />
                ))}
            </ul>
        )
    }
}

export default HtmlRefer;