import logo from "../../assets/logo.png";
import { Image, useDisclosure } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import style from "./header.module.css";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { ProductsState } from "../../Context";

const Header = () => {
  const navigate = useNavigate();
  const { cart } = ProductsState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigateToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      {screenWidth > 1024 ? (
        <header className={style.wrapper}>
          <Image
            onClick={() => navigateToHomePage()}
            src={logo}
            alt="site logo"
            width={120}
            objectFit="cover"
          />
          <div className={style.menubar}>
            <FaRegUser size={20} />
            <span className={style.cart}>
              <BsCart2 size={20} />
              <span className={style.cart_amount}>{cart.length}</span>
            </span>
            <IoSearch size={20} />
          </div>
          <div className={style.nav_links}>
            <Link to="/coming-soon">New Arrivals</Link>
            <Link to="/coming-soon">Sale</Link>
            <Link to="/coming-soon">Blogs</Link>
          </div>
        </header>
      ) : (
        <header className={style.mobile_wrapper}>
          <Image
            onClick={() => navigateToHomePage()}
            src={logo}
            alt="site logo"
            width={120}
            objectFit="cover"
          />
          <div>
            <span onClick={onOpen}>
              <GiHamburgerMenu size={20} />
            </span>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              size="lg"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton size={100} padding={4} />
                <div className={style.mobile_nav}>
                  <div className={style.search_bar}>
                    <input type="text" />
                    <IoSearch />
                  </div>
                  <span>Profile</span>
                  <div className={style.mobile_cart}>
                    <span>Cart</span>
                    <span>{cart.length}</span>
                  </div>
                  <span>New Arrivals</span>
                  <span>Sale</span>
                  <span>Blogs</span>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
