import React, { useEffect, useState } from "react";
import Product from "../components/product/Product";
import '../components/product/Product.scss';
import user1servicenow from '../components/product/adobeu1.jpeg';
import user2servicenow from '../components/product/adobeu2.jpeg';

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
        <div className="cust360div"> <h1 className="cust360">Products <span className="span360">360</span></h1></div>
        <h1><img className="salesImg" src="https://www.pccentre.com.na/wp-content/uploads/2022/08/1200px-Adobe_Corporate_Logo.png" alt="" /></h1>
        {/* <div className="textC"><h1 className="h1C">Bringing Companies and Customers together!</h1></div> */}
        <ul className='circle-container'>
        
        <li className='listItem'><Product ID="61" className="product" imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/1200px-Adobe_Creative_Cloud_rainbow_icon.svg.png" productName = "Creative Cloud"/></li>
        <li className='listItem'><Product ID="62" className="product" imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png" productName = "Photoshop"/></li>

        <li className='listItem'><Product ID="64" className="product" imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1200px-Adobe_Premiere_Pro_CC_icon.svg.png" productName="Premiere Pro"/></li>
                <li className='listItem'><Product ID="63" className="product" imageSource="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADdCAMAAACc/C7aAAAAkFBMVEWzCwD///+uAACxAAD68/LRhIKzAACsAAD9+Pj//Pz04eDjtLPowsHry8reqKbx2dj36ejlu7rNdnS+QDzWkY/KbWq5LCfPfXu8OTXTiYfIZGHZmZfmvLvASkfcoZ/x1tXDUk+3HRe4JiG2Fg/FWVbZnJq2FQ3EVVLJb227LSfIZ2TBTEnFXVreray7Mi69PjpZqE6HAAALQUlEQVR4nO2da3viOAyFEwlMuAQYCFCglEKv00L7///dOnfbSSAJWATPnm99dlp4144tS8eKZZ+Rs+0vPzd/X6wG6mX/PVke3dY5Buvkfx20HxAAkd0ap0gMkX/Bn/agLqQ743yNxRPFOOjMrQE53APe+stXEcL8WBFyyOAuxlAU/8r9CpCDOxvFWAg/uZM2B9L5ur9RjMU6M6cM5IDd5SjGQrY9D7m4z5maioF3DvIbbv0lLxesTkK29nc+jKHwwSmGHL8bwcgp960iyBa721VVFe6dfMiuGXM1FP7mQ/4axMgpn/MgFwasq6JgmYX8Yxgjp3xUIVtGzdVADB0F8tk8SAtXMmTfuMnqC1wJ8r6D8iKxFxFybeRA8qEcppAGrjqhkHUTyLWpkBYcE0hjQtaM2C6GNC8OSBUssD7kt7kjaeFXCDk2eCA5pRNADo2G9CNYDnkwdm31hZMA0uiB5FulDzkyG9KCMYccGj1bg4fSsheGQ+KaQ24M3iV98Z3SsveGQ7KpbTmGM1psb1stwxdXTtn9ByDR+QcgofU/5HXFEG9SUaKDZMC+V4fvPdAXsqkgGWwG3TBT33+lxiSCxJ3oPBkRl+xpIHHTtSXRpnlJIHFqqyKtStBA5lg1nwgpKSCjVL2iFd3qQwAZF138FWed2lIJYxACSHyKsBy+d8A8mbp0E5YAEsYR1dSfoPgaQ3bJoh/9kCy2mhzDz+nEzPaS6qnUD4mxm+83HDhMliGyLKF+yNiCEX+Mn+uNtCOarwSQo5DIjSFTDxFVmpAAMoro4uwuS8MfqoohwcITEXkxZOp5o6qmaYfEXUQ0iSE3CSRVnlA7JPuJiGYRZLpR2vYPDaV+yAcV8jOFJMrd64ecR0CfMWTqXbS/aJZXumeyHUO+pZBEewjd6hpbhUC4aeSZAgkRUGxMAOFqStsYyOhsNYgheykkkVmBLqzrxZApoz01ZHVNLKfd8GOEPIE5+2SaGAhrvYFBKlLXMgayHSGFcZ24TVIZUAm2kPjUER5DUod/+pjqFkW2LjprhYkAcXEdmAOZYAWJKyYUDI7GTNc0xPHTycJBiywWIMm7LuKHEuR1h8y4SPFM7oV1BsTODi/mQCaBnb9TglD76ZqTkuSf8Sei8jAZ1XS5JRAFJM6S+So9kmQ1ShLI+Ehp/4BYVTeoTGClMbr9BmJZncydSVNpjsPXsXAD1+6SWXpoIJPbtmLDCqrIlcr9AdluHEkpj0BEFpdFDuQnmWmAyKzEullIyzTIJB5IRXh3imokNxlIQrsSlYFQPCuHmhnl4wmUbJU3eCTp/K6odK7aGmY7Cz9IWXqIyiDhZ5ONpGIipLxxQ/ZMvsqMdDGdRbi6Kq0B3ygd2mSQyrrzQHmrgMqDrvRYI52tZGGd0n6V9j48DSTLBOiUOwjVUWtiq6JsjXOzQzNlJw4SyLDJiCLC5gY0OZ51DqRZRnvBhS6JrhkHBST7zmMk7K9GUgsp6PZMNmFJygQ5WaxAVBkQiiKsukmmhy6iq0wU5XR1k3xN8j0Ozf0XAovLXmF0hJuGLk1WQr9Z6U2B7AM8JT+Q3Balc0kmmjJx46QIfPQ7lw8Ko3/KEq5NdAmSPdoh1ZNkeMiChQStWbohMdMw/z0YOYH9UX9YqRtyqTBGfjrG0kfV0++x0QuZqYF8xJcKhBvrum9OaIYU23QrTyAI1ZGNXkrNkJllR7C1CHF7d66VUi9kJiUg3WOOLfhcrff8jQS5Lv8aeiEz0Y50UGZWuviMY3pk/iukAvl9bV5e3hkLf6r/Xii9kGreXClKiq8P6IUvyMKX6WQ9HLjbnhgojbfu0Puw6r4ASytkxvShHiBBOIWNX9tHd3zyXWfjx+UcasxfrZCZ/WOuDATrPOXSnFDPsyq/RUknpFquk431fHLipl34uq8TGlatxOuEzJyWf+MhYAjs8JRn0yqnZbXB1AiZsbWENgF/eZl6blHep5xGlaoMGiFBfVfZCv0htCZ/zr5JkW+o495otHXdrbzMJmpVCR/0QWYGctwBePDOzNHe47B92OwYiLI2h09P+V/mVGg3oQ8yM5DLzxJD2Nt1+K6vjBIGeyhbSrtuhTquNshMaF5WxS9oQzYS/2H5qzPaIGFURJE7gMc06+MWLiqMiWNZ/nvrglRNAsVqud4HfwSFt/A5s6IdQu62VdrDrgsyv5CVGcD+ZAdhoMZAiAvcef6clePE0iV5TZBZv2BGo6eVHHGLgWzBi0zlZErpUooeSPnhyWq7fuZBnRpq41wY/u46B1M26JWuyOuBLCrW+eoNV6zgKMGkZ8552imTFmWr5S1HkiPk+eoDucvdydan8CxtpYOV+K+ZkkwpbV27OiTCbz8/LnUev9jZUy+ifPhq9Q/+xA6igR8lWipdYbguJP8uk/z9sXV8Ldm9FuZqqMT3mO/nr2xAeJN9kq8U69zAzemXJQz/zCFjWM9TeSfQ9SAZ7HIbY3JNK7bmRfgqgVm+UnQtSI5YuKLWMF8hzM5hVrj1fR1IhP2JTaMgp3ruT36cfLF9lertVSCBFU1UX3XvgvLz9bIoyu/OqnzpK0Birqss0QX+Xb5t7LxtzobUr+axvBiSwUReUftKaP59UZ7fT3l9eI/CAzoeTFjFhexSSNjIC8TRUlw7VzAkhZn1zWyxmH38shpp9MsgEeX15olvlfLsuppTh/lBT816yEWQsJJmKj8eoVqrI7x2VqwLIJVh7PtnBrG9oC8aM9I51YeEjTiM7o9/+mOWPFmp+kOdUW3IjifAjA/hAVdNQ06aMFlrQzIUnz0vWtJBsXo0Y7LWhUQmbIbuLvoD+CAzNmSy1oTEufA4TpJUDCphAN0d+zOqA4n7NNUy2ick6jXQ5ryDtQYke0/HcZhm1EAJdcZNGcdakEKRXDgLiCaHQA/3DJl213OmKQcyJfGxaMxkrQGZ2uYdsQ6qls4b9b75ypBJAC4zKokB2kug51QVMrWPi88ceDKjUyvjoU1VIZNE/VL4LVDLO5pdj1VVEVJoXCb8DfV2SyPOV4IqQiZFRCFFD2rlQ7sTuaqqQsaLaPo7alRO2BaqrKpC9pTZKhWIm7d5hKoJOe6EPyNTyzD67wZUV1XIONv77P8SwkxNijYnKhdUFTLe9LufADjJ1CvorvBWUdUtRHCu5FTplo1krB7xnLKuHJrJWD3iUe+XpRrvGxYDJKocoOe/gtB/HOu7/XWrxnnSy0PsbRo6VX3VyQy8ZpxITpv+lb0VVCuRhUNpe+wVuzeboXp5V2BtN9xBeoPlQ8MRL8igAzBmIdS9dEOqS0p317grRiKy5ny3lA95LwNSW9iyqF6rdzsxx+q+Gz6UbG9btN0AbyA25ZCvho8kzjgkaaO8GwjfOGQDU09XFQw4ZLMKF9cXtDikbfZ09fsAWGQv9LyR/Is4ViPzwVeUby6y6N45dxMF753xG+aYvFMGN3F8yCbm9q+lIOkftD6ibClLq/Bl2AHkm7FDGRpwA0jH1JGM3oUdduoiaZJ3A0Wuo6gdmZlPZfzm9gjSzIAgrqfGjeXI+uYSKvHexJAGJu3ShqRJi8BGVsIvUurnTPsgNsnYeA0JLmOh2WPD3GIXSjTDCZCae+TRCsTGHGLbzhZND2QKyV1kpN6kY1MSzSB7G+QGrK2/RlDCzD4BadsrA9bYjK8h00rXq9z8rmFCzFz5zkCeaG10D2JK/5ACSNuZdO52MNXLuYWQtr39vc85ixmL8QlI2x4UdHBqsBhCu8D6VwDJH80V3NNwIrzkt1c5CclDg+G0cw8WFr+5L05OddE4AWn7TX8mP4Fbp7Hi3233sT7TvfE0pC9nNPjz5C3bDZS3Pg7yO2rK+g/xoXMC0VMzJAAAAABJRU5ErkJggg==" productName = "Acrobat Pro"/></li>
        <li className='listItem'><Product ID="65" className="product" imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Adobe_Animate_CC_icon_%282020%29.svg/1200px-Adobe_Animate_CC_icon_%282020%29.svg.png"  productName = "Animate"/></li>
        <li className='listItem'><Product ID="66" className="product" imageSource="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Adobe_Dreamweaver_CC_icon.svg/1200px-Adobe_Dreamweaver_CC_icon.svg.png" productName = "Dreamweaver"/></li>
        
        
        
        
        
        

        <li><img className="customer360image" src={whichUser(user)} /></li>
        
        </ul>
        </>
    );
}

export default Homepage;