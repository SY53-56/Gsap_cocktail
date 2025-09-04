import React from 'react'
import { openingHours, socials } from '../constants'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
export default function Contact() {
    useGSAP(()=>{
        const titleSplite = SplitText.create("#contact h2",{type:"words"})
        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger:"#contact",
                start:"top center"
            },
            ease:"power1,inOut"
        })
 timeline.from(titleSplite.words,{opacity:0,xPercent:100, stagger:0.2})
 .from("#contact h3 , #contact p",{opacity:0, yPercent:100,stagger:0.2})
 .to("#f-right-leaf",{y:"-50",duration:1, ease:"power1.inOut"})
  .to("#f-left-leaf",{y:"-50",duration:1, ease:"power1.inOut"})
    },"<")
  return (
  <footer id='contact'>
    <img src="/images/footer-right-leaf.png" alt="leaf-right" id='f-right-leaf' />
        <img src="/images/footer-left-leaf.png" alt="leaf-left" id='f-left-leaf' />

        <div className='content'>
             <h2>Where to find Us</h2>
             <div>
                <h3>Visit our store </h3>
                <p>446, Raq Blvd, #404, Los Angeles, Ca 907596</p>
             </div>
  <div>
    <h3>Contact US</h3>
    <p>(555) 786-686-6575</p>
    <p>yadav77@gmail.com</p>
  </div>
  <div>
    <h3>open everyday</h3>
    {openingHours.map((time)=>{
        <p key={time.day}>
            {time.day}: {time.time}
        </p>
    })}
  </div>
  
 <div>
    <h3>socials</h3>
    <div className='flex-ccenter gap-5'>
{socials.map((social)=>{

    <a
    key={social.name}
     href={social.url}
    target='_blank'
    rel='nooopener noreferrer'
    aria-label={social.name}
    >
        <img src={social.img} alt="" />
    </a>
})}
    </div>
 </div>
        </div>
  </footer>
  )
}
