import React from 'react'
import styles from "../Styles/Packages.module.css"
import { Search2Icon } from '@chakra-ui/icons'

const Packages = () => {
  return (
    <div className={styles.PackagePageWrapper}>
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
    </div>
  )
}

export default Packages