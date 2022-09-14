import React, { useEffect, useState } from "react";
import Product from "../components/product/Product";
import '../components/product/Product.scss';
import user1servicenow from '../components/product/nvidiaU1.jpeg';
import user2servicenow from '../components/product/nvidiaU2.jpeg';

const whichUser=(user)=> {
    if(user===1) {
        return user1servicenow;
    } else {
        return user2servicenow;
    }
}

const Homepage = () => {
    const [user,setUser] = useState(1);
    
    
        const HandleClickUser1=()=> {
        setUser(1);
        }
        const HandleClickUser2=()=> {
        setUser(2);
        }
    
    
   

    return (
        <>
        <button className="button1" onClick={HandleClickUser1}>User 1</button>
        <button className="button2" onClick={HandleClickUser2}>User 2</button>
        <div className="cust360div"> <h1 className="cust360">Graphic <span className="span360">Cards</span></h1></div>
        <h1><img className="salesImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrEgFPPEVp8nJrN8L7alufyMwylZlXkNXHA&usqp=CAU" alt="" /></h1>
        {/* <div className="textC"><h1 className="h1C">Bringing Companies and Customers together!</h1></div> */}
        <ul className='circle-container'>
        
        <li className='listItem'><Product ID="51" className="product" imageSource="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3080/images/design/geforce-rtx-3080-1-960.jpg" productName = "RTX 30"/></li>
        <li className='listItem'><Product ID="52" className="product" imageSource="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-rtx-turing/2080/gallery/geforce-rtx-2080-gallery-c-641-u@2x.jpg" productName = "RTX 20"/></li>
        <li className='listItem'><Product ID="53" className="product" imageSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9eq6d6B-vY_yEvtbGSJ61l0Sk_nXgnqunA&usqp=CAU" productName = "GTX 16"/></li>
        <li className='listItem'><Product ID="54" className="product" imageSource="https://www.nvidia.com/content/dam/en-zz/Solutions/GeForce/campaigns/10-series/geforce-gtx-1080-ti-2c50-P@2x.png" productName="GTX 10"/></li>
        <li className='listItem'><Product ID="55" className="product" imageSource="https://www.nvidia.com/content/dam/en-zz/Solutions/GeForce/campaigns/900-series/mobile-980.png"  productName = "GTX 900"/></li>
        <li className='listItem'><Product ID="56" className="product" imageSource="https://upload.wikimedia.org/wikipedia/commons/1/12/GTX780ti.png" productName = "Geforce 700"/></li>
        
        
        
        
        
        

        <li><img className="customer360image" src={whichUser(user)} /></li>
        
        </ul>
        </>
    );
}

export default Homepage;