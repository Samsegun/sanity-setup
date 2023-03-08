import { useEffect, useState } from "react";
import { configuredClient } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(configuredClient);

function urlFor(source) {
    return builder.image(source);
}

function App() {
    const [pets, setPets] = useState([]);

    let PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
    let DATASET = import.meta.env.VITE_DATASET;

    let QUERY = encodeURIComponent('*[_type == "pet"]');

    // Compose the URL for your project's endpoint and add the query
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                const { result } = data;

                setPets(result);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Sanity frontend project</h1>

            <ul>
                {!pets.length && <li>Loading....</li>}

                {Boolean(pets.length) &&
                    pets.map(pet => {
                        return (
                            <li key={pet.name} className='list-item'>
                                Name - {pet.name} <br /> Age - {pet.age}
                                <div className='img-wrapper'>
                                    <img
                                        src={urlFor(pet.image)
                                            .auto("format")
                                            .url()}
                                    />
                                </div>
                            </li>
                        );
                    })}
            </ul>

            <div>
                <pre></pre>
            </div>
        </div>
    );
}

export default App;
