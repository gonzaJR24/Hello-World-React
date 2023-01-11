import { Fragment } from "react"
import "./App.css"
import Testimonials from "./components/Testimonials"
import Photo1 from "./images/profile3.jpg"
import Photo2 from "./images/profile1.jpg"
import Photo3 from "./images/profile2.jpg"


export default function App(){
    return(
        <Fragment>
            <Testimonials
                img={Photo1}
                name="Leonidas Valdez"
                rating="⭐⭐⭐⭐⭐"
            />

            <Testimonials
                img={Photo2}
                name="Maria Severino"
                rating="⭐⭐⭐"
            />

            <Testimonials
                img={Photo3}
                name="Leandra Valdespin"
                rating="⭐⭐⭐⭐"
            />
        </Fragment>
    )
}