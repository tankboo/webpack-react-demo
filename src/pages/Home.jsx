import React, { Component } from "react"
import _ from 'lodash'
import { getCurrentDate } from "../shared/utils"

class Home extends Component{

    componentWillMount(){
        console.log("home init !! @@@ **** ")
        const currentDate = getCurrentDate()
        console.log({currentDate})
        console.log(_.join(["index", "module", "loaded!"], " "));
    }

    render(){
        return <div> 主页面123456789 ** </div>
    }
}

export default Home