import { Link } from '@material-ui/core'
import React from 'react'
import "./product.css"
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from '@material-ui/icons'

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://cdn.pixabay.com/photo/2015/09/02/12/39/woman-918583_960_720.jpg" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoButton">
                        <div className="productInfoItem">
                            <div className="productInfoKey">id:</div>
                            <div className="productInfoValue">123</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Sales:</div>
                            <div className="productInfoValue">45677</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">active:</div>
                            <div className="productInfoValue">yes</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">in stock:</div>
                            <div className="productInfoValue">no</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productButton">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple AirPod" />
                        <label>in stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="idActive">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://cdn.pixabay.com/photo/2015/09/02/12/39/woman-918583_960_720.jpg" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="productButtonUpdate">Update</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
