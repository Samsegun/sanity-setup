import { useState } from "react";
import { configuredClient } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const builder = imageUrlBuilder(configuredClient);

function urlFor(source) {
    return builder.image(source);
}

const Pets = () => {
    // const [pets, setPets] = useState([]);

    let PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
    let DATASET = import.meta.env.VITE_DATASET;

    let QUERY = encodeURIComponent('*[_type == "pet"]');
    // Compose the URL for your project's endpoint and add the query
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    // const { isLoading, error, data, isFetching } = useQuery("petsData", () =>
    //     fetch(URL).then(res => res.json())
    // );

    // console.log(data);

    // if (isLoading) return <p>Loading...</p>;

    // if (error) return <p>An error occurred: {error.message}</p>;

    return (
        <ul>
            {data.result.map(pet => {
                return (
                    <li key={pet.name} className='list-item'>
                        Name - {pet.name} <br /> Age - {pet.age}
                        <div className='img-wrapper'>
                            <img src={urlFor(pet.image).auto("format").url()} />
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default Pets;
