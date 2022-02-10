import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY_UNSPLASH}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(0);
    const [query, setQuery] = useState("");

    const fetchImages = async () => {
        setLoading(true);
        let url;
        const urlPage = `&page=${page}`;
        const urlQuery = `&query=${query}`;

        if (query) {
            url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
        } else {
            url = `${mainUrl}${clientID}${urlPage}`;
        }
        try {
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            if (query && page === 1) {
                setPhotos((photos) => [...data.results]);
            } else if (query) {
                setPhotos((photos) => [...photos, ...data.results]);
            } else {
                setPhotos((photos) => [...photos, ...data]);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchImages();
        // eslint-disable-next-line
    }, [page]);

    useEffect(() => {
        const event = window.addEventListener("scroll", () => {
            if (
                !loading &&
                window.innerHeight + window.scrollY >=
                    document.body.scrollHeight - 5
            ) {
                setPage((old) => old + 1);
                // console.log("it worked");
            }
        });
        return () => window.removeEventListener("scroll", event);
        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // setQuery(e.target.value);
        setPage(1);
        // fetchImages();
    };
    return (
        <main>
            <section className="search">
                <form className="search-form">
                    <input
                        type="text"
                        placeholder="search"
                        className="form-input"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                    />
                    <button
                        type="submit"
                        className="submit-btn"
                        onClick={handleSubmit}
                    >
                        <FaSearch />
                    </button>
                </form>
            </section>

            <section className="photos">
                <div className="photos-center">
                    {photos.map((image, index) => {
                        return <Photo key={index} {...image} />;
                    })}
                </div>
                {loading && <h2 className="loading">Loading...</h2>}
            </section>
        </main>
    );
}

export default App;
