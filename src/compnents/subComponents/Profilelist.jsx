import React, { Component } from "react";
import Card from "./Card";
import Profile from "./Profile";

class Profilelist extends Component {
    render(){
        return(
            <div>
                <Card>
                    <Profile/>
                </Card>
            </div>
        )
    }
}

export default Profilelist;

