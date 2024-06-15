import React from 'react';
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from '../assets/Logo.png'

const MyFooter = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='space-y-4 mb-8'>
            <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="" className='w-10 inline-block items-center'/><span className='text-[#263238]'>NEXCENT</span></a>
            <div>
              <p className='mb-1'>Copyright © 2024 Nexcent Itd.</p>
              <p>All rights reserved</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col>
                <Footer.Link href="#about">About Us</Footer.Link>
                <Footer.Link href="#blog">Blog</Footer.Link>
                <Footer.Link href="#">contact us</Footer.Link>
                <Footer.Link href="#service">Pricing</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Support" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Help center</Footer.Link>
                <Footer.Link href="#">Status</Footer.Link>
                <Footer.Link href="#">Legal</Footer.Link>
                
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Nexcent" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter