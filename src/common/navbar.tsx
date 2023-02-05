import Logo from '../../public/svg/logo.svg'
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { navbarArr } from '@/constant'
import UnstyledLink from '@/components/links/UnstyledLink';
import { handleNewURL } from './projects';

const socialMediaArr = [
    {
        id:1,
        name: "Github",
        icon: <FaGithub className="text-xl text-white"/>,
        link: "https://github.com/todak2000"
    },
    {
        id:2,
        name: "LinkedIn",
        icon: <FaLinkedin className="text-xl text-white"/>,
        link: "https://www.linkedin.com/in/dolagunju/"
    },
    {
        id:3,
        name: "Twitter",
        icon: <FaTwitter className="text-xl text-white"/>,
        link: "https://twitter.com/todak"
    },
]

export default function NavBar(){

    return(
        <section className="flex flex-row justify-between items-center">
            <div className="w-[100%] md:w-[70%] flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between items-center">
                    <UnstyledLink href='/'>
                        <Logo className="text-5xl mr-4"/>
                    </UnstyledLink> 
         
                    <UnstyledLink href='/' className="text-lg text-[#189DFD] hidden md:block">Daniel Olagunju</UnstyledLink>
                </div>
                <div className={`grid grid-cols-${navbarArr?.length ? navbarArr?.length :"4"} gap-3`}>
                {/* <div className="grid grid-cols-4 gap-3"> */}
                    {navbarArr.map(({id, label, url})=>{
                        return (
                            <UnstyledLink key={id} href={url} onClick={()=>{label === "Resume" && handleNewURL('https://drive.google.com/file/d/1AiJXd6QbY9U0nuDLDagiivyIby1KOjzm/view?usp=share_link')}} className="text-sm md:text-lg text-white">{label}</UnstyledLink>
                        )
                    })}
                </div>
          
            </div>
            <div className="hidden grid-cols-3 gap-8 md:grid">
                {socialMediaArr.map(({icon, link, id})=>{return <span key={id} className="cursor-pointer" onClick={()=>handleNewURL(link)} >{icon}</span>})}
            </div>
        </section>
    )
}