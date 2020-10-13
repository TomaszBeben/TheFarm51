import React from 'react';
import ReactDOM from 'react-dom';
import useAxios from 'axios-hooks';
import ModelSelect from './modelSelect';

const CarSelect = () => {
    const [{ data, loading, error }, refetch] = useAxios(
        'http://www.json-generator.com/api/json/get/cerfcKtvma?indent=2'
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div>
            <button onClick={refetch}>refresh</button>
            <h1>
                {data.map(data => (
                <button className="li" key={data.id} >
                    {data.model}
                    </button>
                    
                ))}
            </h1>
            <h1>

            </h1>

        </div>
    )
}

export default CarSelect;


