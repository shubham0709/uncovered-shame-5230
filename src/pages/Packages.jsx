import React from 'react'
import styles from "../Styles/Packages.module.css"
import { Search2Icon } from '@chakra-ui/icons'

const Packages = () => {
  return (
    <div className={styles.PackagePageWrapper}>
          
    {/* ======================top======================== */}

        <div border="1px solid red">
          <img
            className={styles.TopImageWithInput}
            src="https://cdn1.tripoto.com/media/filter/nxxl/img/311219/Image/1573737581_screen_shot_2019_11_14_at_6_46_59_pm.jpg"
            alt=""
          />
          <div className={styles.SearchMainDiv}>
            <h1 className={styles.SearchBarHead}>
            Exclusive Tours & Holiday Packages
            </h1>
            <div className={styles.InputDiv}>
              <input
                className={styles.SearchInputbar}
                placeholder="Search Packages for destinations"
              />
              <div className={styles.SearchIconDiv}>
                <Search2Icon w={5} h={5} color="grey" />
              </div>


              
            </div>
            <div className={styles.ButtonSDivCollection}>
                <div className = {styles.ButtonsCollection}>
                    <button className={styles.Button}>Stays with Activities</button>
                    <button className={styles.Button}>Destination Packages</button>
                    <button className={styles.Button}>Rajasthan</button>
                    <button className={styles.Button}>Manali</button>
                </div>
                <div className = {styles.ButtonsCollection}>
                <button className={styles.Button}>Himanchal</button>
                    <button className={styles.Button}>Rishikesh</button>
                    <button className={styles.Button}>Uttarakhand</button>
                </div>
            </div>
          </div>
        </div>

    {/* ===================Lower Part========================= */}

    <div className={styles.Belowpart}>
           
           <div></div>
           {/* ====Customizable Tour Packages========= */}

           <div className={styles.customizableToorPackages}>
            <h2 className={styles.PackageHead}>Customizable Tour Packages</h2>
            <p className={styles.Packagedescription}>Need help in getting a perfect travel experience according to your need? Tripoto has curated several travel packages covering some of the most popular holiday destinations for you!</p>
            <div className={styles.PackagecardWrapper}>
                <div className={styles.PackageCa4rd}>
                    <img className={styles.PacakgeCardImage} src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597313001_coup.jpg" alt="" />
                </div>
                <div className={styles.PackageCa4rd}>
                    <img className={styles.PacakgeCardImage} src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597742263_f.jpg" alt="" />
                </div>
                <div className={styles.PackageCa4rd}>
                    <img className={styles.PacakgeCardImage} src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597312306_budget.jpg" alt="" />
                </div>
            </div>
            
           </div>
          

        {/* ======Lower descriptive part ========*/}
           <div className={styles.DescriptiveDivwrapper}>

            <div className={styles.descriptiveSubpartWrapper}>
              <h2 className={styles.PackageHead}>Domestic Getaways</h2>
              <p className={styles.Packagedescription}>There's a striking difference between travelling on your own terms 
              and being bound by an itinerary designed by somebody else. That's why, Tripoto allows you to 
              customise your packages to the best possible extent. Choose from Tripoto's select range of 
              sanitised properties available at unbelievable prices for a safe & memorable getaway!</p>
            </div>

            <div className={styles.descriptiveSubpartWrapper}>
              <h2 className={styles.PackageHead}>Pick from hundreds of holiday packages</h2>
              <p className={styles.Packagedescription}>There is something for everyone who visits on Tripoto platform. Whether you
               wish to get a taste of India's rich heritage in Rajasthan, or pay a visit to the Himalayas to heal your senses; 
               it's all included. Also, on offer are international holiday packages, specially curated for Indian travellers. 
               Witness the breathtaking beaches of Thailand or stroll through the bustling cities in Australia. Newlyweds can chose
               from some of the most sought after honeymoon destinations like Maldives or Iceland, or go off the beaten path in
                destinations like China or Egypt. If you are looking for a quick break, plan a weekend getaway to some of the top
                 hideouts near your city. Business travellers and group tours are in the mix as well - popular packages include trips 
                 to places like Dubai and Malaysia. If you are seeking some serious adventure, select from trekking packages through
                  some of the most scenic mountainous ranges in the world and capture moments for a lifetime. Skydiving, scuba diving,
                   adventure biking, and much more on Tripoto - it's a one of the most dynamic selection of trips and activities for 
                   Indian travellers.</p>
            </div>

            <div className={styles.descriptiveSubpartWrapper}>
              <h2 className={styles.PackageHead}>Why book holidays with Tripoto?</h2>
              <p className={styles.Packagedescription}>Tripoto's travel partners provide some of the best India tour packages and International tour packages. We are passionate about travel and strive to offer experiences that matter. Get in touch with our team with any query about holiday packages in India.</p>
            </div>

            <div className={styles.descriptiveSubpartWrapper}>
              <h2 className={styles.PackageHead}>How to book holidays with Tripoto?</h2>
              <p className={styles.Packagedescription}>TBooking holidays on Tripoto is as easy as it gets. Pick from hundreds of packages. We will then connect you with your choices of travel providers via email and/or phone. Tripoto partners with leading travel companies in India, like MakeMyTrip, Thomas Cook, SOTC, Yatra, to name a few, to help you plan the perfect vacation. Here is the step-by-step guide to booking domestic or international packages on Tripoto.

Step 1: Click on the 'Book Holidays' button on the top right corner of any page on Tripoto.

Step 2: You will be taken to a page with different categories of packages.

Step 3: Click on any package to submit your requirements. We will attend to your query and put you in touch with a representative from our travel partners within 48 hours.</p>
            </div>
           </div>
         
       
    </div>
    </div>
  )
}

export default Packages