import React from "react"
import Navbar from "./components/Navbar"
import Travel from "./components/Travel"
import "./App.css"
import { data }  from "./data"

function App(){
    const travels = data.map(item => {
        return(
            <Travel
                key={item.title}
                {...item}
            />
        )
    })

    return(
        <div>
            <Navbar />
            <section className="travels-list">
                {travels}
            </section>
        </div>
    );
}

export default App;