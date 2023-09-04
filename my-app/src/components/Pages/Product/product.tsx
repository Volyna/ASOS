import BreadCrumbs from '../../BreadCrumbs/breadCrumbs';
import Footer from '../../Footer/FooterV';
import Header_full from '../../Header_full/Header_full';
import './product.css';
import prod1 from '../../../images/prod1.png'
import prod2 from '../../../images/prod2.png'
import prod3 from '../../../images/prod3.png'
import prod4 from '../../../images/prod4.png'
import prod5 from '../../../images/prod5.png'
import prod6 from '../../../images/prod6.png'
import item1 from "../../../images/viewAll_1.png"
import like from "../../../images/like.svg"

const ProductPage = () => {
    const price = 55
    const colors = ['grey', 'blue']


    const arrow = <button style={{backgroundColor:'white', border:'none', width:"30px"}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{margin: '10px 0 10px 0'}}><path d="M16.2468 6.65752L9.9993 12.7475L3.7518 6.65752C3.64018 6.54849 3.49034 6.48746 3.3343 6.48746C3.17827 6.48746 3.02842 6.54849 2.9168 6.65752C2.86275 6.71048 2.81982 6.77368 2.7905 6.84344C2.76119 6.9132 2.74609 6.98811 2.74609 7.06377C2.74609 7.13944 2.76119 7.21434 2.7905 7.2841C2.81982 7.35386 2.86275 7.41707 2.9168 7.47002L9.56305 13.95C9.67977 14.0638 9.83631 14.1275 9.9993 14.1275C10.1623 14.1275 10.3188 14.0638 10.4356 13.95L17.0818 7.47127C17.1362 7.41828 17.1795 7.35491 17.209 7.28493C17.2386 7.21494 17.2538 7.13974 17.2538 7.06377C17.2538 6.9878 17.2386 6.91261 17.209 6.84262C17.1795 6.77263 17.1362 6.70927 17.0818 6.65627C16.9702 6.54724 16.8203 6.48621 16.6643 6.48621C16.5083 6.48621 16.3584 6.54724 16.2468 6.65627V6.65752Z" fill="#353535"/></svg></button>
                        


    return(
    <>
        <Header_full/>
        <BreadCrumbs/>

        <div className='product'>
            <div className="photos">
                <img src={prod1} alt="" />
                <img src={prod6} alt="" />
                <img src={prod2} alt="" />
                <img src={prod3} alt="" />
                <img src={prod4} alt="" />
                <img src={prod5} alt="" />

            </div>

            <div className="info">
                <div className="blocke">
                    <h1>Title</h1>
                    <p className='code'>Product code: CODE</p>
                </div>

                <div className="blocke">
                    <h1 className='price'>{price}$</h1>
                </div>

                <div className="blocke">
                    <p className='code'>Color: COLOR</p>

                    <div className="colors">
                        <div className='square' style={{backgroundColor:"#E5DFD6"}} />
                        <div className='square' style={{backgroundColor:"#556F50"}}/>
                        <div className='square' style={{backgroundColor:"black"}}/>
                    </div>
                </div>

                <div className="blocke">
                    <div className="sizes">
                        <button className='size active'>xs</button>
                        <button className='size none' style={{color:"gray"}}>s</button>
                        <button className='size active' style={{border:"2px solid black"}}>m</button>
                        <button className='size active'>l</button>
                        <button className='size active'>xl</button>
                    </div>
                </div>

                <div className="blocke">
                    <div className="helpinfo">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" style={{marginRight:'5px'}}>
                            <path d="M14.5299 4.7625L11.2368 1.46937C11.1671 1.39945 11.0843 1.34397 10.9931 1.30612C10.902 1.26827 10.8042 1.24878 10.7055 1.24878C10.6068 1.24878 10.5091 1.26827 10.4179 1.30612C10.3267 1.34397 10.2439 1.39945 10.1743 1.46937L1.46864 10.1769C1.39872 10.2465 1.34324 10.3293 1.30539 10.4205C1.26753 10.5117 1.24805 10.6094 1.24805 10.7081C1.24805 10.8068 1.26753 10.9046 1.30539 10.9957C1.34324 11.0869 1.39872 11.1697 1.46864 11.2394L4.76176 14.5306C4.83144 14.6005 4.91424 14.656 5.0054 14.6939C5.09656 14.7317 5.1943 14.7512 5.29301 14.7512C5.39172 14.7512 5.48946 14.7317 5.58063 14.6939C5.67179 14.656 5.75459 14.6005 5.82426 14.5306L14.5299 5.82312C14.6705 5.68247 14.7495 5.49171 14.7495 5.29281C14.7495 5.0939 14.6705 4.90315 14.5299 4.7625ZM14.1761 5.46937L5.46864 14.1769C5.42177 14.2236 5.35827 14.2499 5.29208 14.2499C5.22588 14.2499 5.16238 14.2236 5.11551 14.1769L1.82239 10.8837C1.77564 10.8369 1.74938 10.7734 1.74938 10.7072C1.74938 10.641 1.77564 10.5775 1.82239 10.5306L3.99926 8.35375L5.82239 10.1769C5.84562 10.2001 5.87319 10.2185 5.90354 10.2311C5.93389 10.2437 5.96641 10.2501 5.99926 10.2501C6.03211 10.2501 6.06464 10.2437 6.09499 10.2311C6.12534 10.2185 6.15291 10.2001 6.17614 10.1769C6.19937 10.1536 6.21779 10.1261 6.23036 10.0957C6.24293 10.0654 6.2494 10.0328 6.2494 10C6.2494 9.96715 6.24293 9.93462 6.23036 9.90427C6.21779 9.87392 6.19937 9.84635 6.17614 9.82312L4.35239 8L5.99926 6.35375L7.82239 8.17687C7.8693 8.22378 7.93292 8.25013 7.99926 8.25013C8.0656 8.25013 8.12923 8.22378 8.17614 8.17687C8.22305 8.12996 8.2494 8.06634 8.2494 8C8.2494 7.93365 8.22305 7.87003 8.17614 7.82312L6.35239 6L7.99926 4.35375L9.82239 6.17687C9.84562 6.2001 9.87319 6.21852 9.90354 6.23109C9.93389 6.24366 9.96642 6.25013 9.99926 6.25013C10.0321 6.25013 10.0646 6.24366 10.095 6.23109C10.1253 6.21852 10.1529 6.2001 10.1761 6.17687C10.1994 6.15364 10.2178 6.12607 10.2304 6.09572C10.2429 6.06537 10.2494 6.03284 10.2494 6C10.2494 5.96715 10.2429 5.93462 10.2304 5.90427C10.2178 5.87392 10.1994 5.84635 10.1761 5.82312L8.35301 4L10.5299 1.82312C10.5768 1.77637 10.6403 1.75011 10.7065 1.75011C10.7727 1.75011 10.8361 1.77637 10.883 1.82312L14.1761 5.11625C14.2229 5.16311 14.2491 5.22661 14.2491 5.29281C14.2491 5.35901 14.2229 5.4225 14.1761 5.46937Z" fill="#9A9A9A"/></svg>
                               Size guide
                        </p>
                        <p>Size out of stock?</p>
                    </div>
                </div>

                <div className="blocke">
                    <button className='but'>add to busket</button>
                </div>

                <div className="blocke">
                    <div className="additional">
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none" style={{marginRight:'7px'}}>
                            <path d="M5.5 13.5C5.77614 13.5 6 13.2761 6 13C6 12.7239 5.77614 12.5 5.5 12.5C5.22386 12.5 5 12.7239 5 13C5 13.2761 5.22386 13.5 5.5 13.5Z" stroke="#9A9A9A" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.5 13.5C12.7761 13.5 13 13.2761 13 13C13 12.7239 12.7761 12.5 12.5 12.5C12.2239 12.5 12 12.7239 12 13C12 13.2761 12.2239 13.5 12.5 13.5Z" stroke="#9A9A9A" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.5 2.5H3.5L5 11H13" stroke="#9A9A9A" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5 9H12.795C12.8528 9.00004 12.9089 8.98004 12.9536 8.9434C12.9983 8.90676 13.029 8.85576 13.0403 8.79906L13.9403 4.29906C13.9476 4.26278 13.9467 4.22533 13.9377 4.18943C13.9288 4.15352 13.9119 4.12006 13.8885 4.09145C13.865 4.06284 13.8355 4.03979 13.802 4.02398C13.7686 4.00816 13.732 3.99997 13.695 4H4" stroke="#9A9A9A" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        Find in store
                        </p>
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14" fill="none" style={{margin:"0 7px 0 0", float:'left', height:'20px'}}>
                            <g clip-path="url(#clip0_750_4852)">
                              <path d="M6.99935 4.08334C7.11538 4.08334 7.22666 4.12944 7.30871 4.21148C7.39076 4.29353 7.43685 4.40481 7.43685 4.52084V7.14584C7.43685 7.26188 7.39076 7.37316 7.30871 7.4552C7.22666 7.53725 7.11538 7.58334 6.99935 7.58334C6.88332 7.58334 6.77204 7.53725 6.68999 7.4552C6.60794 7.37316 6.56185 7.26188 6.56185 7.14584V4.52084C6.56185 4.40481 6.60794 4.29353 6.68999 4.21148C6.77204 4.12944 6.88332 4.08334 6.99935 4.08334ZM6.99935 9.91668C7.15406 9.91668 7.30243 9.85522 7.41183 9.74582C7.52122 9.63643 7.58268 9.48805 7.58268 9.33334C7.58268 9.17863 7.52122 9.03026 7.41183 8.92086C7.30243 8.81147 7.15406 8.75001 6.99935 8.75001C6.84464 8.75001 6.69627 8.81147 6.58687 8.92086C6.47747 9.03026 6.41602 9.17863 6.41602 9.33334C6.41602 9.48805 6.47747 9.63643 6.58687 9.74582C6.69627 9.85522 6.84464 9.91668 6.99935 9.91668Z" fill="#9A9A9A"/>
                              <path d="M4.27402 0.85749C4.31458 0.816827 4.36277 0.784561 4.41582 0.762541C4.46887 0.74052 4.52574 0.729175 4.58318 0.729156H9.41552C9.5316 0.729156 9.64243 0.77524 9.72468 0.85749L13.1418 4.27466C13.2241 4.35632 13.2702 4.46716 13.2702 4.58382V9.41616C13.2702 9.4736 13.2588 9.53047 13.2368 9.58352C13.2148 9.63657 13.1825 9.68476 13.1418 9.72532L9.72468 13.1425C9.68411 13.1832 9.63593 13.2154 9.58288 13.2374C9.52983 13.2595 9.47295 13.2708 9.41552 13.2708H4.58318C4.52574 13.2708 4.46887 13.2595 4.41582 13.2374C4.36277 13.2154 4.31458 13.1832 4.27402 13.1425L0.856849 9.72532C0.816186 9.68476 0.783921 9.63657 0.7619 9.58352C0.739879 9.53047 0.728534 9.4736 0.728516 9.41616V4.58382C0.728516 4.46774 0.774599 4.35691 0.856849 4.27466L4.27402 0.85749ZM4.76402 1.60416L1.60352 4.76524V9.23474L4.7646 12.3958H9.2341L12.3952 9.23532V4.76466L9.23468 1.60416H4.76402Z" fill="#9A9A9A"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_750_4852">
                                <rect width="14" height="14" fill="white"/>
                              </clipPath>
                            </defs>
                        </svg>
                        Free standard delivery for Members when spending $30 or more. Free Click and Collect. Free and flexible return for members.
                        </p>
                    </div>
                </div>


                <div className="blocke">
                    <ul className='description'>
                        <li>
                            <p>Description</p>
                            {arrow}
                        </li>
                        <hr/>

                        <li>
                            <p>Material & suppliers</p>
                            {arrow}
                        </li>
                        <hr/>
                        <li>
                            <p>Brand</p>
                            {arrow}
                        </li>
                        <hr/>
                        <li>
                            <p>Size & Fit</p>
                            {arrow}
                        </li>
                        <hr/>
                        <li>
                            <p>Care guide</p>
                            {arrow}
                        </li>
                        <hr/>
                        <li>
                            <p>Reviews</p>
                            {arrow}
                        </li>
                        <hr/>
                    </ul>
                </div>
            </div>
        </div>

        <div className="cont">
            <h1>you might also like</h1>
            <div className="carousel">

                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="desc">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="desc">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="desc">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="desc">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="desc">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>

            </div>

        </div>


        <div className="cont">
            <h1>recently viewed</h1>
            <div className="carousel">

                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="desc">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="desc">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="desc">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="desc">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="desc">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
            </div>

        </div>

        <Footer/>
    </>
    )
}

export default ProductPage;