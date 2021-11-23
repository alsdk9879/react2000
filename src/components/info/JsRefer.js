import React from "react";
import axios from "axios";
import ReferInfoJs from "../info/ReferInfoJs";

class JsRefer extends React.Component {

    state = {
        refers: []
    }

    getRefer = async () => {
        const {
            data: {
                data: {htmlRefer},
            },
        } = await axios.get("https://alsdk9879.github.io/react998_11/src/assets/json/javascript.json");
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
                    <ReferInfoJs 
                        key={refer.id}
                        link={refer.link}
                        id={refer.id}
                        title={refer.title}
                        desc1={refer.desc1}
                        desc2={refer.desc2}
                        retuens={refer.retuens}
                        syntax={refer.syntax}
                        definition={refer.definition}
                    />
                ))}
            </ul>
        )
    }
}

export default JsRefer;