import React, {useState, useEffect} from 'react';
import axios from 'axios'

function Table(props) {
    const [respData, setRespData] = useState()

    useEffect(() => {
        getData()
    },[])
    const getData = async() => {
        await axios.get(`https://randomuser.me/api`)
        .then(res => {
            // by considering the length of results array will always one  updated the state with 0th index value 
            // setRespData(res.data.results)
            setRespData(res.data.results[0])
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            {/* if we are getting multiple values in result array then uncomment the map() code and replace the respData with val inside return
            {respData.map(val => (
            <> */}
            <button type= 'button' onClick={() => getData()}>Refresh</button>
            <br/>
            <label>Name : </label>
            <label>{respData?.name.title} {respData?.name.first} {respData?.name.last}</label>
            <br/>
            <label>Email : </label>
            <label>{respData?.email}</label>
            {/* </>
            ))} */}

        </div>
    );
}

export default Table;