import React from "react";
import { FaLinkedin, FaGithub,FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child : (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href : 'https://www.linkedin.com/in/yeabsra-ayehualem-a67119219?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bzhr5fv5eTV%2BKarV%2B9EBi6Q%3D%3D',
                style: 'rounded-tr-md'
        },
        {
            id: 2,
            child : (
                <>
                Github <FaGithub size={30}/>
                </>
            ),
            href : 'https://github.com/aminadab23',
                
        },
        {
            id: 3,
            child : (
                <>
                EMail <HiOutlineMail size={30}/>
                </>
            ),
            href : 'mailto:yeabman32@gmail.com',
                
        },
        {
          id:4,
          child: (
            <>
            Telegram <FaTelegram size={30}/>
            </>
          ),
          href: "https://t.me/Aminadab23",
          
        },
        {
            id: 5,
            child : (
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href : '',
            style: 'rounded-br-md',
            download: true
        },
        
    ]
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {
            links.map(({id,child,style,href,download})=>(
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4  ml-[-100px] hover:ml-[-10px] rounded-md duration-300 bg-gray-500" + style}>
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))
        }
       
      </ul>
    </div>
  );
};
