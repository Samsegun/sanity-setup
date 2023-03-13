import { useEffect, useState } from "react";
import Pets from "./pets";

// core features of react-query
// -query: getting data from somewhere
// -mutation: updating the data

function App() {
    return (
        <div>
            <h1>Sanity frontend project</h1>

            <Pets />
        </div>
    );
}

export default App;
