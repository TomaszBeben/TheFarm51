import React from 'react';
import ReactDOM from 'react-dom';
import useAxios from 'axios-hooks';

const ModelSelect = () =>{
    const [{ data, loading, error }, refetch] = useAxios(
        'http://www.json-generator.com/api/json/get/cerfcKtvma?indent=2'
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>


    return(
        <>
       <h1>
                {data.map(data => (
                <button  key={data.id} >
                    {data.model}
                    </button>
                    
                ))}
            </h1>
        </>
    )
}

export default ModelSelect;