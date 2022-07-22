import React from "react";
import styles from "../../Styles/Navbar.module.css";
import { TriangleDownIcon, Search2Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Inspirations = [
  { to: "#", title: "Visit Dubai" },
  { to: "#", title: "Visit Singapore" },
  { to: "#", title: "Beaches" },
  { to: "#", title: "Mountains" },
  { to: "#", title: "Heritage" },
  { to: "#", title: "Weekend Guide" },
  { to: "#", title: "Upcoming Festivals" },
  { to: "#", title: "Honeymoon Packages" },
  { to: "#", title: "Wildlife Tourism" },
  { to: "#", title: "Road trips" },
  { to: "#", title: "Gateway Guide" },
  { to: "#", title: "Luxury trave" },
  { to: "#", title: "Explore more" },
];

const PublishTrip = [
  { to: "#", title: "Create New" },
  { to: "#", title: "Upload Photos/Videos" },
  { to: "#", title: "Import Blog" },
];
const Navbar = () => {
  const [value, setValue] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer);

  const openLoginModal = () => {};
  const openSignUpModal = () => {};

  const handleSignIn = () => {
    console.log("handling sign in");
  };

  var myScrollFunc = function () {
    var y = window.scrollY;
    y > 100 ? setValue(true) : setValue(false);
  };
  window.addEventListener("scroll", myScrollFunc);
  return (
    <div>
      <div
        className={styles.NavbarWrapper}
        style={value ? { backgroundColor: "#2f9bdb" } : { backgroundColor: "" }}
      >
        <div className={styles.LogoWrapper}>
          <div>
            <img
              className={styles.LogoImage}
              src="https://cdn1.tripoto.com/assets/2.9/img/logo/tripoto.svg"
              alt="Tripoto Logo"
            />
          </div>
          <div
            className={styles.InputDiv}
            style={value ? { display: "flex" } : { display: "none" }}
          >
            <input
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              className={styles.SearchInputbar}
              placeholder="Search for itineraries, destinations, hotels or activities"
            />
            <div className={styles.SearchIconDiv}>
              <Search2Icon w={5} h={5} color="grey" />
            </div>
          </div>
        </div>

        <div className={styles.MenuBoxWrapper}>
          <div className={styles.MenuWrapper}>
            <div className={styles.Linktabs}>
              <div className={styles.dropDownMainDiv}>
                <button className={styles.dropDownButton}>
                  Inspirations <TriangleDownIcon />
                </button>
                <div className={styles.dropDownContent}>
                  {Inspirations.map((elem) => (
                    <Link key={elem.title} to={`/${elem.to}`}>
                      <div key={elem.title} className={styles.DropDownLink}>
                        {elem.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.Linktab}>Forum</div>
            <Link to="/packages" className={styles.Linktab}>
              Packages
            </Link>
            <div className={styles.Linktabs}>
              <div className={styles.dropDownMainDiv}>
                <button className={styles.dropDownButton}>
                  Publish Trip <TriangleDownIcon />
                </button>
                <div className={styles.dropDownContent}>
                  {PublishTrip.map((elem) => (
                    <Link key={elem.title} to={`/${elem.to}`}>
                      <div key={elem.id} className={styles.DropDownLink}>
                        {elem.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.Linktab} onClick={() => handleSignIn()}>
              Sign in
            </div>
          </div>
        </div>

        <div
          className={styles.GetTheApp}
          style={value ? { flexDirection: "column" } : { flexDirection: "row" }}
        >
          <div
            style={{ fontWeight: "600", cursor: "pointer", marginTop: "5px" }}
          >
            Get App
          </div>
          <div className={styles.DropDownLineBarWraper}>
            <div
              className={styles.DropDownLineBar}
              style={
                value
                  ? { backgroundColor: "#2f9bdb" }
                  : { backgroundColor: "white", marginTop: "2px" }
              }
            ></div>
            <div
              className={styles.DropDownLineBar}
              style={
                value
                  ? { backgroundColor: "#2f9bdb" }
                  : { backgroundColor: "white", marginTop: "2px" }
              }
            ></div>
            <div
              className={styles.DropDownLineBar}
              style={
                value
                  ? { backgroundColor: "#2f9bdb" }
                  : { backgroundColor: "white", marginTop: "2px" }
              }
            ></div>
          </div>
        </div>

        <div className={styles.ScreenBottomNavBar}>
          <div>
            <i className="fa-solid fa-house-chimney"></i>
            <div> Home</div>
          </div>
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
            <div>Explore</div>
          </div>
          <div>
            <i
              className="fa-solid fa-circle-plus"
              style={{ fontSize: "50px" }}
            ></i>
          </div>
          <div>
            <i className="fa-solid fa-bag-shopping"></i>
            <Link to="/packages">Packages</Link>
          </div>
          <div>
            <i className="fa-solid fa-bullhorn"></i>
            <div> Forums</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
