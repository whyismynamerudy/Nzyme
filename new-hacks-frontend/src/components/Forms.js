import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Forms.css';

function Forms(){
    return(
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
                            placeholder="Please type down/upload contents to summarize..... "/>
                        </label >
                        <input
                            type="submit"
                            value="Submit"
                            className = "App-Submit1"
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
                            placeholder="Summarize will come out here......"/>
                        </label >
                        <input
                            type="submit"
                            value="Submit"
                            className = "App-Submit2"
                        />
                    </form>
                </div>

                <div className="F_R">
                    <p>hello</p>
                </div>
            </div>    
        </div>
    )
}

export default Forms;
