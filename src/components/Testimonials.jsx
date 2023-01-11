import "./Testimonials.css"

export default function Testimonials({img,name,rating}){
    return(
        <div className="testimonial-container">
            <div className="testimonial-head">
                <img className="testimonial-img" src={img} alt="photo-profile"></img>
                <h2 className="testimonial-name">{name}</h2>
            </div>

            <div className="testimonial-body">
                <p className="testimonial-rating">{rating}</p>
                <p className="testimonial-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores asperiores iure quia cum quasi ad, sit expedita repudiandae ratione magnam illo perferendis officia nemo reiciendis itaque accusamus quo unde! Itaque?</p>
            </div>
        </div>
    )
}