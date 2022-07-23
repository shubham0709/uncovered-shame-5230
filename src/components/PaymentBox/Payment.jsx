import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Radio,
    Select,
    ButtonGroup,
    Input,Flex,
    RadioGroup,Stack,Button,IconButton
  } from '@chakra-ui/react'
  import { useEditableControls } from '@chakra-ui/react'
  import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    // useEditableControls
  } from '@chakra-ui/react'
  import { CheckIcon,CloseIcon,EditIcon,ChevronRightIcon, ArrowForwardIcon } from '@chakra-ui/icons'
  import styles from "../../Styles/Payment.module.css"
  import React from 'react'
  import { useDisclosure } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import { PaymentCredential } from './Paymentcredential'

export function ScrollingExample({amount,email,contact}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const scrollBehavior ='inside'
   
  
    // const mobile=7651991563
    const btnRef = React.useRef(null)
    return (
      <div style={{backgroundColor:""}}>
        {/* <div style={{backgroundColor:"#2f9bdb",height:"69px"}}></div> */}
        <Button style={{backgroundColor:"#2f9bdb",color:"white",position:"relative",top:"-10px"}} mt={3} ref={btnRef} onClick={onOpen} >
        {`Proceed to pay ${amount}`}
        <ArrowForwardIcon color="white"  fontSize="3xl" margin="5px 0px 0px 100px" padding="5px" />
        </Button>
  
        <Modal
          
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent>
          <div className={styles.PaymentPagewrapper}>
                <div className={styles.headerWrapper}>
                    <div className={styles.innerheaderWrapper}>
                        <p className={styles.head}> Your upcoming Trip</p>
                        <p>This payment is for Tripoto's Mindfull Retreats</p>
                        <p className={styles.PaymentAmount}> {amount} </p>
                    </div>

                    <div className={styles.languagebar}>
                         <p style={{marginLeft:"18px"}}>English</p>
                    </div>

                    <div className={styles.trustOfRazorpayMainDiv}>
                    <div className={styles.innerFlexDiv}>
                        <img styles={{height:"10px",width:"10px",marginLeft:'15px'}} src="https://d6xcmfyh68wv8.cloudfront.net/assets/trusted-badge/1st-fold/top-illustration-mob.svg" alt="" />
                        <div>Razorpay Treusted Business</div>
                    </div>
                    <div>
                        <WarningIcon />
                    </div>
                    </div>
                </div>
                <div className={styles.mobilenumCont}>
                    <div>
                         <CustomControlsExample number={contact ? contact : 8874834315} />
                    </div>
                    <div style={{width:"2px",marginTop:"9px",height:"12px",backgroundColor:"grey"}}></div>
                    <div>
                        {/* emeil iD */}{email}
                    </div>
                </div>
                <div styles={{height:"300px"}}></div>

            </div>
            {/* <ModalHeader>Modal Title</ModalHeader> */}
            <ModalCloseButton color="white"/>
            <ModalBody>


          <div className={styles.PaymentMethod}>
              <p className={styles.paymentHead}>PREFERED PAYMENT METHODS</p>
              <div className={styles.FlexMethod}>
                <div style={{display:"flex",justifyContent:"space-between",border:"1px solid #dddddd",padding:"5px 15px 5px 15px"}}>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div><img style={{height:"25px",width:"25px"}} src="https://1000logos.net/wp-content/uploads/2020/04/Google-Pay-Logo.png" alt="" /></div>
                        <div>UPI-Google Pay</div>
                    </div>
                    <div>
                        <ChevronRightIcon />
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",border:"1px solid #dddddd",padding:"5px 15px 5px 15px"}}>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div><img style={{height:"25px",width:"25px"}} src="https://pixlok.com/wp-content/uploads/2021/02/PhonePe-Logo-Svg.jpg" alt="" /></div>
                        <div>UPI-PhonePe</div>
                    </div>
                    <div>
                    <div style={{display:"flex"}}>    
                         <PaymentCredential contact={contact} amount={amount} />
                         <ChevronRightIcon /></div>
                    </div>
                </div>
              </div>

              
          </div>

          <div className={styles.PaymentMethod}>
              <p className={styles.paymentHead}>CARDS UPI & MORE</p>
              <div className={styles.FlexMethod}>




              <div style={{display:"flex",justifyContent:"space-between",border:"1px solid #dddddd",padding:"5px 10px 5px 10px"}}>
                    <div style={{display:"flex",gap:"20px"}}>
                        <div><i class="fa-solid fa-wallet"></i>
                            {/* <img style={{height:"25px",width:"25px"}} src="https://pixlok.com/wp-content/uploads/2021/02/PhonePe-Logo-Svg.jpg" alt="" /> */}
                        </div>
                   
                        <div>
                             <div>UPI-PhonePe</div>
                             <p className={styles.cardtype}>Visa MasterCard Rupay & More</p>
                        </div>
                    </div>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",border:"1px solid #dddddd",padding:"5px 10px 5px 10px"}}>
                    <div style={{display:"flex",gap:"20px"}}>
                        <div><img style={{height:"25px",width:"25px"}} src="https://e7.pngegg.com/pngimages/795/596/png-clipart-logo-line-angle-brand-line-angle-triangle.png" alt="" /></div>
                   
                        <div>
                             <div>UPI/QR</div>
                             <p>Google-Pay, Phonepe paytm & mare</p>
                        </div>
                    </div>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",border:"1px solid #dddddd",padding:"5px 10px 5px 10px"}}>
                    <div style={{display:"flex",gap:"20px"}}>
                     <img style={{height:"25px",width:"25px"}} src="https://cdn-icons-png.flaticon.com/128/4826/4826345.png" alt="" />
                   
                        <div>
                             <div>Netbanking</div>
                             <p className={styles.cardtype}>All Indian Banks</p>
                        </div>
                    </div>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",border:"1px solid #dddddd",padding:"5px 10px 5px 10px"}}>
                    <div style={{display:"flex",gap:"20px"}}>
                        <div><img style={{height:"25px",width:"25px"}} src="https://cdn-icons-png.flaticon.com/512/5928/5928961.png" alt="" /></div>
                   
                        <div>
                             <div>Wallet</div>
                             <p>Phonepe & More</p>
                        </div>
                    </div>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",border:"1px solid #dddddd",padding:"5px 10px 5px 10px"}}>
                    <div style={{display:"flex",gap:"20px"}}>
                        <div>
                            <img style={{height:"25px",width:"25px"}} src="https://pixlok.com/wp-content/uploads/2021/02/PhonePe-Logo-Svg.jpg" alt="" />
                        </div>
                   
                        <div>
                             <div>EMI</div>
                             <p className={styles.cardtype}>Debit/Credit Cards EarlySalary, And Zestmoney</p>
                        </div>
                    </div>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",border:"1px solid #dddddd",padding:"5px 10px 5px 10px"}}>
                    <div style={{display:"flex",gap:"20px"}}>
                        <div><img style={{height:"25px",width:"25px"}} src="https://cdn-icons-png.flaticon.com/128/4947/4947457.png" alt="" /></div>
                   
                        <div>
                             <div>PayLater</div>
                             <p>ICICI Bank PayLater</p>
                        </div>
                    </div>
              </div>

        </div>

              
          </div>
            </ModalBody>
            <ModalFooter>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }


  function CustomControlsExample({number}) {
    /* Here's a custom control */
    function EditableControls() {
      const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
      } = useEditableControls()
  
      return isEditing ? (
        <ButtonGroup justifyContent='center' size='sm' fontSize="12px">
          <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
          <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
        </ButtonGroup>
      ) : (
        <Flex justifyContent='center'>
          <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
        </Flex>
      )
    }
  
    return (
    
      <Editable
        textAlign='center'
        defaultValue={number}
        fontSize='l'
        display="flex"
        flexDirection="reverse-column"
        isPreviewFocusable={false}
      >
        <EditablePreview marginRight="15px" />
        {/* Here is the custom input */}
        <Input as={EditableInput} size="sm" />
        <EditableControls />
      </Editable>
      
    )
  }