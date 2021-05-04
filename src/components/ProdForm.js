import React, { useState } from 'react';
import axios from 'axios';
import './ProdForm.css';

function ProdForm() {
    const [production,setProduction] = useState()  
    const [isLoading, setLoading] = useState(false)
    const [CropData, setData] = useState({ state:'', district:'', season:'', crop:'', area:''})
    var item

    // useEffect(() => {
    //     console.log(isLoading)
    // },[isLoading])

    const setAll= (item) => {
        setLoading(false); 
        setProduction(item);
        //console.log(isLoading)
    }

    const onSubmit = () => {
        // for (var key of Object.keys(CropData)) {
        //     CropData[key]= parseFloat(CropData[key],10)
        // }
        CropData["area"]= parseFloat(CropData["area"],10)
        const data  = JSON.stringify(CropData)
        setLoading(!isLoading); 
        console.log(data)
        axios
		    .post("/prod", data, { 
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
                item=res.data.data
                console.log(item)
                setAll(item)
			})
			.catch((err) => {
				console.log(err.response);
            })
          
    };

    return (
        <div className="form1">
            <div className="container">
                <form >
                    <div className="row">
                        <div className="col-25">
                        <label for="N">State:</label>
                        </div>
                        <div className="col-75">
                            <input 
                                type="text" 
                                id="N"  
                                name='N' 
                                placeholder="Enter Your State Name" 
                                value={CropData.state} 
                                onChange={e => setData({...CropData, state: e.target.value})} 
                                required
                            />
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-25">
                        <label for="K">district:</label>
                        </div>
                        <div className="col-75">
                            <input 
                                type="text" 
                                id="K" 
                                name='K'
                                placeholder="Enter your distrist name"
                                value={CropData.district}
                                onChange={e => setData({...CropData, district: e.target.value})}
                                required 
                            />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-25">
                        <label for="humid">Season:</label>
                        </div>
                        <div className="col-75">
                            <input 
                                type="text" 
                                id="humid" 
                                name='humid' 
                                placeholder="Enter season" 
                                value={CropData.season}
                                onChange={e => setData({...CropData, season: e.target.value})}  
                                required   
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label for="ph">Crop:</label>
                        </div>
                        <div className="col-75">
                            <input 
                                type="text" 
                                id="ph" 
                                name='ph' 
                                placeholder="Enter crop name" 
                                value={CropData.name}
                                onChange={e => setData({...CropData, name: e.target.value})}  
                                required   
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label for="rain">Area:</label>
                        </div>
                        <div className="col-75">
                            <input 
                                type="text" 
                                id="rain" 
                                name='rain' 
                                placeholder="Enter total field area" 
                                value={CropData.area}
                                onChange={e => setData({...CropData, area: e.target.value})} 
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
               {production && <p><b>Predicted Production</b> : {production} tonne(s)</p>}
            </div>
            
        </div>

    )
}

export default ProdForm;
