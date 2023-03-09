import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Pets from "./pets";

const queryClient = new QueryClient();

function App() {
    // useEffect(() => {
    //     fetch(URL)
    //         .then(res => res.json())
    //         .then(data => {
    //             const { result } = data;

    //             setPets(result);
    //         })
    //         .catch(err => console.log(err));
    // }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <h1>Sanity frontend project</h1>

                <Pets />
                {/* <div>
                <pre>{JSON.stringify(pets, null, 2)}</pre>
            </div> */}

                <div>
                    <pre></pre>
                </div>
            </div>
        </QueryClientProvider>
    );
}

export default App;
