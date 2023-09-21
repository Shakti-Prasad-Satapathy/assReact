import React, {useState, useEffect} from 'react';
import axios from 'axios'


function Table(props) {
    const [respData, setRespData] = useState()
    const [render, setRender] = useState()

    useEffect(() => {
        getData()
    },[])


    const getData = async() => {
        await axios.get(`https://randomuser.me/api`)
        .then(res => {
            // by considering the length of results array will always one  updated the state with 0th index value 
            // setRespData(res.data.results)
            // to store the resp data in state
            // setRespData(res.data.results[0])
            // to store the resp data in localStorage
            localStorage.setItem('result', JSON.stringify(res.data.results[0]));

            // we can store the name and email by creating 2 different keys in local storge, currently i have added the object in 1 key
            // as we are updating  the value in local storage, so to re render need to update a state too
            setRender(Math.random())

        })
        .catch(err => {
            console.log(err);
        })
        // we can use forceUpdate() to force re-render the component without updating state
        // forceUpdate()
        
    }
    return (
        <div>
            {/* if we are getting multiple values in result array then uncomment the map() code and replace the respData with val inside return
            {respData.map(val => (
            <> */}
            <button type= 'button' onClick={() => getData()}>Refresh</button>
            <br/>
            <label>Name : </label>
            {/* mapping with state */}
            {/* <label>{respData?.name.title} {respData?.name.first} {respData?.name.last}</label> */}
            {/* mapping with localStorage */}
            <label>{JSON.parse(localStorage.getItem("result"))?.name.title} {JSON.parse(localStorage.getItem("result"))?.name.first} {JSON.parse(localStorage.getItem("result"))?.name.last}</label>
            <br/>
            <label>Email : </label>
            {/* mapping with state */}
            {/* <label>{respData?.email}</label> */}
            {/* mapping with localStorage */}
            <label>{JSON.parse(localStorage.getItem("result"))?.email}</label>

            {/* </>
            ))} */}

        </div>
    );
}

export default Table;