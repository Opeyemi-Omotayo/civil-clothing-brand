import React from "react";

const Footer = () => {
  return (
    <>
   
    <footer id="footer" className=" py-10 pb-4 mx-auto px-[25px] lg:px-[45px] ">
      <div className="flex flex-col justify-between lg:flex-row ">
        <section className="lg:max-w-[250px] max-w-[280px] space-y-2">
          <h2 className="text-2xl font-bold text-primary">CIVIL</h2>
          <p className="text-sm">
            Our vision is to provide you with beautiful dresses and help  you look good.
          </p>
        </section>
        <section className="grid grid-cols-2 pt-10 text-sm lg:grid-cols-3 lg:gap-y-0 gap-y-10 lg:space-x-20">
          <div>
            <h3 className="pb-5 text-base font-semibold">About</h3>
            <ul className="space-y-5">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Bussiness Relation</li>
            </ul>
          </div>
          <div>
            <h3 className="pb-5 text-base font-semibold">Community</h3>
            <ul className="space-y-5">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div>
            <h3 className="pb-5 text-base font-semibold">Socials</h3>
            <ul className="space-y-5">
              <li>Tiktok</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </section>
      </div>
      <hr className="my-6" />
      <section className="flex flex-col-reverse justify-between text-sm font-medium lg:flex-row">
        <div>
          <p>©2023 CIVIL. All rights reserved</p>
        </div>
        <div className="flex items-center justify-between pb-6 lg:space-x-10 lg:justify-start lg:items-start lg:pb-0">
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
      </section>
    </footer>
    </>
  );
};

export default Footer;