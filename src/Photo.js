import React from "react";

const Photo = ({
    urls: { regular: image },
    alt_description,
    likes,
    user: {
        name,
        portfolio_url,
        profile_image: { medium: profile_img },
    },
}) => {
    return (
        <article className="photo">
            <img src={image} alt={alt_description} />
            <div className="photo-info">
                <div>
                    <h4>{name}</h4>
                    <p>{likes} likes</p>
                </div>
                <a href={portfolio_url}>
                    <img src={profile_img} alt={name} className="user-img" />
                </a>
            </div>
        </article>
    );
};

export default Photo;
