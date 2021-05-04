import React, {useState, useEffect} from 'react';
import axios from "axios";
import './Form.css';


function Form() {
    const [crops,setCrops] = useState([])  
    const [isLoading, setLoading] = useState(false)
    const [CropData, setData] = useState({ P:'',N:'', K:'', temp:'', humid:'', ph:'', rain:''})
    var items
    useEffect(() => {
        console.log("Crops : ",crops)
    },[crops])

    useEffect(() => {
        console.log(isLoading)
    },[isLoading])

    const setAll= (items) => {
        setLoading(false); 
        setCrops(items)
        //console.log(isLoading)
    }

    const onSubmit = () => {
        for (var key of Object.keys(CropData)) {
            CropData[key]= parseFloat(CropData[key],10)
        }
        const data  = JSON.stringify(CropData)
        setLoading(!isLoading); 
        console.log(data)
        axios
		    .post("/", data, { 
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'mode':'cors',
                // 'credentials': 'include'
                // 'Access-Control-Request-Method': 'POST',
                // 'Access-Control-Request-Headers': 'X-PINGOTHER, Content-Type'

                }
            })
			.then((res) => {
				console.log("Successfully predict");
                items=res.data.data
                console.log(items)
                setAll(items)
			})
			.catch((err) => {
				console.log(err.response);
            })
          
    };

    return (
        <div className="form">
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-25">
                        <label for="N">Nitrogen:</label>
                        </div>
                        <div className="col-75">
                            <input 
                                type="text" 
                                id="N"  
                                name='N' 
                                placeholder="Enter Nitrogen value of Soil" 
                                value={CropData.N} 
                                onChange={e => setData({...CropData, N: e.target.value})} 
                                required
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label for="P">Phosphorus:</label>
                        </div>
                        <div className="col-75">
                            <input 
                                type="text" 
                                id="P" 
                                name='P'
                                placeholder="Enter Phosphorus value of Soil"
                                value={CropData.P}
                                onChange={e => setData({...CropData, P: e.target.value})} 
                                required
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label for="K">Potassium:</label>
                        </div>
                        <div className="col-75">
                            <input 
                                type="text" 
                                id="K" 
                                name='K'
                                placeholder="Enter Potassium value of Soil"
                                value={CropData.K}
                                onChange={e => setData({...CropData, K: e.target.value})}
                                required 
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label for="temp">Temperature:</label>
                        </div>
                        <div className="col-75">
                            <input 
                                type="text" 
                                id="temp" 
                                name='temp' 
                                placeholder="Enter Temperature value of Soil" 
                                value={CropData.temp}
                                onChange={e => setData({...CropData, temp: e.target.value})} 
                                required    
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label for="humid">Humidity:</label>
                        </div>
                        <div className="col-75">
                            <input 
                                type="text" 
                                id="humid" 
                                name='humid' 
                                placeholder="Enter Humidity value of Soil" 
                                value={CropData.humid}
                                onChange={e => setData({...CropData, humid: e.target.value})}  
                                required   
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label for="ph">PH:</label>
                        </div>
                        <div className="col-75">
                            <input 
                                type="text" 
                                id="ph" 
                                name='ph' 
                                placeholder="Enter ph value of Soil" 
                                value={CropData.ph}
                                onChange={e => setData({...CropData, ph: e.target.value})}  
                                required   
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label for="rain">Rainfall:</label>
                        </div>
                        <div className="col-75">
                            <input 
                                type="text" 
                                id="rain" 
                                name='rain' 
                                placeholder="Enter Rainfall value of Soil" 
                                value={CropData.rain}
                                onChange={e => setData({...CropData, rain: e.target.value})} 
                                required
                            />
                        </div>
                    </div>
                    <div className="row">
                            <button
                                type="submit"
                                disabled={isLoading}
                                onClick={!isLoading ? onSubmit : null}>
                                { isLoading ? 'Making prediction' : 'Predict' }
                            </button>
                        {/* <input type="submit" value="Predict" onClick={onSubmit} /> */}
                    </div>
                </form>
            </div>
            
            <div className="container">
                {crops.length>0 && <h2>Top 5 Recommmended Crops</h2>}
                {crops && 
                    <ol>
                        {crops.map(crop => (<li key={crop}>{crop}</li>))}
                    </ol>  
                }
            </div>
            
        </div>

    )
}

export default Form
