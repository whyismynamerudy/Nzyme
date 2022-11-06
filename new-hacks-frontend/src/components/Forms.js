import React from 'react';
import axios, { AxiosHeaders } from 'axios';
import { useState, useEffect } from 'react';
import Recall from './Recall';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Forms.css';

function Forms(){

    const [inputText, setInputText] = useState("");
    const [summarizedText, setSummarizedText] = useState("");
    const [used, setUsed] = useState(false);
    const [subset, setSubset] = useState([]);
    const [newWords, setNewWords] = useState([]);
    const [removed, setRemoved] = useState("");

    const handleTextInput = (event) => {
        setInputText(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('success so far', inputText);

        const data = {
            "text": {inputText}
        }

        console.log(data);

        await axios.post("/summarize", data)
        .then((res) => {
            console.log(res);
            const summarized_data = res['data']['summary'];
            console.log(String(summarized_data));
            setSummarizedText(String(summarized_data));
            setRemoved(String(res["data"]["removed"]));

            const [...mydata] = res["data"]["subset"]
            setSubset(mydata)
            const [...newdata] = res["data"]["new"]
            setNewWords(newdata)
        })

        // const new_data = {
        //     "text": {summarizedText}
        // }

        // await axios.post('/keywords', new_data)
        // .then((res) => {
        //     console.log(res)
        //     console.log(res["data"])
        // })

        setUsed(true);

    }

    // const collect_keywords = () => {
    //     const data = {
    //         "text": {summarizedText}
    //     }

    //     axios.post('/keywords', data)
    //     .then((res) => {
    //         console.log(res["data"])
    //         const [...mydata] = res["data"]["subset"]
    //         setSubset(mydata)
    //         const [...newdata] = res["data"]["new"]
    //         setNewWords(newdata)
    //     })
    // }

    // useEffect(() => {
    //     if (used){
    //         collect_keywords()
    //     }
    // }, [summarizedText])

    // useEffect(() => {
    //     if (used) {
    //         console.log("i'm in this shit hole");
    //         console.log(subset)
    //         console.log(newWords)
    //         const txt = summarizedText;
    //         for (let word in subset) {
    //             txt.replace(word, `<b>${word}</b>`);
    //         }
    //         setNewSummarized(txt);
    //     }
    // }, [subset])
    
    return(
        <>
        <div className="Forms">
            <div className="F_ROW">
                <div className="F_L">
                    <form className="F_1">
                        <label>
                            <p className  = "Label1">Text Input Box:</p>
                        <textarea
                            className = "App-Form1"
                            type="text"
                            name="name"
                            placeholder="Please type down/upload contents to summarize..... "
                            onChange={handleTextInput}
                        />
                        </label >
                        <input
                            type="submit"
                            value="Submit"
                            className = "App-Submit1"
                            onClick={handleSubmit}
                        />
                    </form>
                </div>

                <div className="F_M">
                    <form className="F_2">
                        <label>
                            <p  className  = "Label2">Summary Box (editable):</p>
                        <textarea
                            className = "App-Form2"
                            type="text"
                            name="name"
                            placeholder="Summarize will come out here......"
                            value={summarizedText}
                        />
                        </label >
                        {/* <input
                            type="submit"
                            value="Submit"
                            className = "App-Submit2"
                        /> */}
                    </form>
                </div>

                <div className="F_R">
                    <button className='F_b_1'>
                        Upload Files
                    </button>

                    <button className='F_b_2'>
                        Voice Typing
                    </button>

                    <button className='F_b_3'>
                        Save
                    </button>
                </div>
            </div>    
        </div>
        <Recall used={used} summary={removed} subsetwords={subset}/>
    </>
    )
}

export default Forms;
