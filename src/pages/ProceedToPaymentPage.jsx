import React from 'react'
import styles from "../Styles/ProceedToPaymentPage.module.css"
import {state} from "../data/state"
import { Button, Checkbox, Input, Select } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const ProceedToPaymentPage = () => {
  return (
    <div>
        <div className={styles.navbarbackground}></div>
        <div  className={styles.ProceedToPaymentPageWrapper}>
            <div className={styles.topSectionWrapper}>
              <div className={styles.left}>
                <div className={styles.topSectionLeft}>
                    <div className={styles.leftTopSection}>
                        <img className={styles.imageC} src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1645595596_image_cover_b_2.jpg" />
                    </div>
                    <div>
                        <p className={styles.priceMainHead}>Embark on an Adventure with Night Safari & Cycle Safari as You Spot Tigers | Mandaal Corbett</p>
                        <div style={{display:"flex",marginbTop:'9px'}}>
                            <img style={{width:"20px",height:"20px",borderRadius:"50%", marginRight:"7px"}} src="https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg" alt="" />
                            <p>Tripoto's Mindful Retreats</p>
                        </div>
                    </div>
                </div>
                <div className={styles.descriptivemainDivWrapper}>
                    <h1 className={styles.DetailsProvHead}></h1>

                    <div className={styles.detailsrowwrapper}>
                        <div className={styles.detailscolWrapper}>
                            <p className={styles.title}>Full Name</p>
                            <p className={styles.custDetails}>Rohit Kumar Gupta</p>
                        </div>
                        <div className={styles.detailscolWrapper}>
                            <p className={styles.title}>Email</p>
                            <p className={styles.custDetails}>Rohit Kumar Gupta</p>
                        </div>
                    </div>
                    <div className={styles.detailsrowwrapper}>
                        <div className={styles.detailscolWrapper}>
                            <p className={styles.title}>Contact</p>
                            <p className={styles.custDetails}>Rohit Kumar Gupta</p>
                        </div>
                        <div className={styles.detailscolWrapper}>
                            <p className={styles.title}>Destination</p>
                            <p className={styles.custDetails}>Rohit Kumar Gupta</p>
                        </div>
                    </div>
                    <div className={styles.detailsrowwrapper}>
                        <div className={styles.detailscolWrapper}>
                            <p className={styles.title}>Departure City</p>
                            <p className={styles.custDetails}>Rohit Kumar Gupta</p>
                        </div>
                        <div className={styles.detailscolWrapper}>
                            <p className={styles.title}>Check-In date</p>
                            <p className={styles.custDetails}>Rohit Kumar Gupta</p>
                        </div>
                    </div>
                    <div className={styles.detailsrowwrapper}>
                        <div className={styles.detailscolWrapper}>
                            <p className={styles.title}>Check-Out Date</p>
                            <p className={styles.custDetails}>Rohit Kumar Gupta</p>
                        </div>
                        <div className={styles.detailscolWrapper}>
                            <p className={styles.title}>Durations</p>
                            <p className={styles.custDetails}>Rohit Kumar Gupta</p>
                        </div>
                    </div>
                    <div className={styles.detailsrowwrapper}>
                        <div className={styles.detailscolWrapper}>
                            <p className={styles.title}>Room type</p>
                            <p className={styles.custDetails}>Rohit Kumar Gupta</p>
                        </div>
                        <div className={styles.detailscolWrapper}>
                            <p className={styles.title}>Number of People</p>
                            <p className={styles.custDetails}>Rohit Kumar Gupta</p>
                        </div>
                    </div>
                    <div className={styles.detailsrowwrapper}>
                        <div className={styles.detailscolWrapper}>
                            <p className={styles.title}>Amount</p>
                            <p className={styles.custDetails}>$ 10000</p>
                        </div>
                    </div>
                    
                
               



                </div>
                <div className={styles.trustDiv}>
                    <img style={{width:"100%"}} src="https://cdn1.tripoto.com/assets/2.9/img/newBannerPaymentLinkPage.png" alt="" />
                </div>
              </div>


                <div className={styles.topSectionRight}>
                    <div className={styles.PriceDetailForm}>
                         <div>
                              <h3 className={styles.priceMainHead}>Price details</h3>
                              <div className={styles.AmountFlex}>
                                  <p className={styles.text}>Total Amount</p>
                                  <p className={styles.DigitAmount}>$ 14,300</p>
                              </div>
                         </div>

                         <div className={styles.TaxDivWrapper}>
                            <p className={styles.DigitAmount}>Tax</p>
                            <p className={styles.DigitAmount} style={{color:"#2f9bdb"}}> + $75</p>
                         </div>

                         <div>
                              <Select placeholder='State of Residence'>
                                 {state.map((elem)=>(
                                    <option key={elem} value={elem}>{elem}</option>
                                 ))}
                              </Select>
                         </div>

                         <div className={styles.ClaimGstWrapper}>
                            <div className={styles.CheckBoxDiv}>
                                <Checkbox />
                            </div>
                            <div>
                                 <p className={styles.DigitAmount}>Claim GST</p>
                                 <p>Add your GST Number to Add for tax claim purposes</p>
                                 <p>(optional)</p>
                            </div>
                         </div>

                         <div className={styles.ClaimGstWrapper} style={{backgroundColor:"white",marginBottom:"7px"}}>
                            <div className={styles.ConditionCheckBoxDiv}>
                                <Checkbox />
                            </div>
                            <div>                          
                                 <p >I accept Tripoto's <Link to="#" ><span className={styles.ConditionStatement}>Terms and conditions</span></Link></p>
                            </div>
                         </div>

                         <div className={styles.buttonWrapper}>
                                <button className={styles.Paybutton}>Proceed to pay $14754</button>
                                <ArrowForwardIcon color="white"  fontSize="3xl" margin="5px" />
                         </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className={styles.footerWrapper}>
            <div className={styles.logoAndStorewrapper}>
                <img src="https://cdn1.tripoto.com/assets/2.9/img/logo/header-blue.svg" alt="" />
            </div>
            <div className={styles.logoAndStorewrapper}>
                <img src="https://cdn1.tripoto.com/assets/2.9/img/logo/download-android-app.svg" alt="" />
            </div>
        </div> */}

    </div>
  )
}

export default ProceedToPaymentPage