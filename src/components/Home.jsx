import React from "react";
import "../css/home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        className="home__img"
      />
      {/* <Product /> */}
      <div className="home__row">
        <Product
          id={456}
          title="The Expanse"
          price={5}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ab346208ab6d5f4d43e7b0fe1b9562e4c279ea70955430c1df17a1f393b391f9._UR1920,1080_RI_SX356_FMwebp_.jpg"
        />
        <Product
          id={1235}
          title="How I met your mother"
          price={10}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1411931c5595042e17a810a37145e62a5b99b98c792d0b4ebe22f1f7c0753d13._UR1920,1080_RI_SX356_FMwebp_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={12345}
          title="The Vikings"
          price={12.55}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a9c162229b2a5f676c64c717c6644e4d3ff64593010d2caf72a2aff2cd12620b._UR1920,1080_RI_SX356_FMwebp_.jpg"
        />
        <Product
          id={1234}
          title="Downton Abbey"
          price={19.9}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ce1905b5a367c853242c5449bf2363e2f78c5aedbca3a9985d3f58f8fadd1b8b._UR1920,1080_RI_SX356_FMwebp_.png"
        />
        <Product
          id={2345}
          title="Mad About You"
          price={3}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/92759308c615a1a0b303723808668a851672df60d1ec7fe72d309392be6469b0._UR1920,1080_RI_SX356_FMwebp_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={1245}
          title="A Discovery of Witches"
          price={10.2}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2b8f5304b0184843f6bfc1db320dcafba0f0012b00849148fcd12900a681ece3._UR1920,1080_RI_SX356_FMwebp_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
