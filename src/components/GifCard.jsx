import React from 'react'

const GifCard = (props) => {
    const { img, title, website, description } = props;
    return (
        <div className="card">
            <img className="card-img-top" src={img} alt={title}/>
            <div className="card-body">
            <h5>{title}</h5>
            <p className="card-text">{description}</p>
            <a href={website} className="btn btn-primary">Go somewhere</a>
            </div>
      </div>
    )
}

export default GifCard
