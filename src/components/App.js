import React from "react"
import MemeGenerator from "./MemeGenerator"
import Header from "./Header"

class App extends React.Component {

    
    render() {
        return (
            <div>
                <Header />
                <MemeGenerator />
            </div>
        )
    }
}

export default App