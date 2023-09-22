import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios'

// **************************************Annotation***************************************
// 
// as per given requirement these are the solutions...
// there are multiple solution for this requirement
// added known solutions  for it...
// we might do it better by googling it....
// added multiple solutions..... as requirement is unclear for me (currently) so updating the state for re-rendering the Component
// we can do  the same without updating the state.... or using useReducer hooks (codes are in comment)
// I have done this assignment in simplest way....
// proper solution can be done after proper requirement
// 
// ***************************************Annotation*********************************************

function Table(props) {
    const [respData, setRespData] = useState()
    const [render, setRender] = useState()
    // to do this without updating state we can add below line and uncomment line 35 (callig forceUpdate())
    // and not doing state update
    // const [ignored, forceUpdate] = useReducer(x => x + 1 , 0)

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