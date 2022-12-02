import React, {useEffect} from 'react';
import style from './StepByStep.module.scss'
import Link from "next/link";
import {act} from "react-dom/test-utils";

const StepByStep = ({active}) => {
    const links = ['Customer', 'WebDev', 'Automation', 'Analytics']

    useEffect(()=>{
        document.getElementById('Customer').addEventListener('mouseenter', active)
        document.getElementById('WebDev').addEventListener('mouseenter', active)
        document.getElementById('Automation').addEventListener('mouseenter', active)
        document.getElementById('Analytics').addEventListener('mouseenter', active)

        document.getElementById('Customer').addEventListener('mouseleave', deactive)
        document.getElementById('WebDev').addEventListener('mouseleave', deactive)
        document.getElementById('Automation').addEventListener('mouseleave', deactive)
        document.getElementById('Analytics').addEventListener('mouseleave', deactive)

        function RemoveHover(el){
            let elem = document.getElementById(el)
            if(el != 'Customer' && el != 'Traffic/ASO'){
                elem.children[0].classList.remove('actCol')
                elem.children[1].classList.remove('actBor')
                elem.children[1].children[0].classList.remove('actBack')
                elem.children[2].children[0].classList.remove('actBack')
                elem.children[3].classList.remove('actCol')

            }else{
                elem.children[0].classList.remove('actCol')
                elem.children[1].classList.remove('actBor')
                elem.children[1].children[0].classList.remove('actBack')
                elem.children[2].classList.remove('actCol')
            }
        }
        function Hover(el, active){
            let elem = document.getElementById(el)
            if(el != 'Customer' && el != 'Traffic/ASO' && active) {
                elem.children[0].classList.add('actCol')
                elem.children[1].classList.add('actBor')
                elem.children[2].children[0].classList.add('actBack')
                elem.children[3].classList.add('actCol')
            }else if(el != 'Customer' && el != 'Traffic/ASO' && !active){
                elem.children[1].classList.add('actBor')
                elem.children[1].children[0].classList.add('actBack')
                elem.children[2].children[0].classList.add('actBack')
            }else if(!active){
                elem.children[1].classList.add('actBor')
                elem.children[1].children[0].classList.add('actBack')
            }else if(active){
                elem.children[0].classList.add('actCol')
                elem.children[1].classList.add('actBor')
                elem.children[1].children[0].classList.add('actBack')
                elem.children[2].classList.add('actCol')
            }
        }

        function active(){
            let el =this.getAttributeNode('id').value
            let skip = false;
            links.forEach((item, i)=>{
                if(item == el && !skip){
                    Hover(item, true)
                    skip = true
                }else if(item != el && !skip){
                    Hover(item, false)
                }else{
                    return;
                }
            })
        }

        function deactive(){
            let el =this.getAttributeNode('id').value
            let skip = false;
            links.forEach((item, i)=>{
                if(item == el && !skip){
                    RemoveHover(item)
                    skip = true
                }else if(item != el && !skip){
                    RemoveHover(item)
                }else{
                    return;
                }
            })
        }

    })
    return (
        <section className={`pt-68 pb-68 ${style.mob}`}>
            <div className={`container ${style.Steps}`}>
                <div className={`row ${style.Text}`}>
                    <Link href={'/services/customer-research'}>
                        <a className={`p-0`} id="Customer">
                            <div className={`${style.textPoints} ${active==1 && active!=5 ? style.act : ''}`}> Customer<br />Research</div>
                            <div className={`p-0 ${style.dots}  ${style.dots} ${active>=1 && active!=5 ? style.active : ''}`}>
                                <div className={`${style.inDots} ${active>=2 && active!=5 ? style.active : ''}`}></div>
                            </div>
                            <p className={`${active==1 && active!=5 ? style.act : ''}`}>We identify your customer needs for you to make data-driven decisions</p>
                        </a>
                    </Link>
                    <Link href={'/services/web-development'}>
                        <a className={`p-0`} id="WebDev">
                            <div className={`${style.textPoints} ${active==2 && active!=5 ? style.act : ''}`}>Web<br />Development</div>
                            <div className={`p-0 ${style.dots} ${active>=2 && active!=5 ? style.active : ''}`}>
                                <div className={`${style.inDots} ${active>=3 && active!=5 ? style.active : ''}`}></div>
                            </div>
                            <div className={`p-0 ${style.line}`}>
                                <div className={`${style.inLine} ${active>=2 && active!=5 ? style.active : ''}`}></div>
                            </div>
                            <p className={`${active==2 && active!=5 ? style.act : ''}`}>We build and maintain custom websites that work fast and increase conversion rates</p>
                        </a>
                    </Link>
                    <Link href={'/services/no-code-automation'}>
                        <a className={`p-0`} id="Automation">
                            <div className={`${style.textPoints} ${active==3 && active!=5 ? style.act : ''}`}>Automation</div>
                            <div className={`p-0 ${style.dots} ${active>=3 && active!=5 ? style.active : ''}`}>
                                <div className={`${style.inDots} ${active>=4 && active!=5 ? style.active : ''}`}></div>
                            </div>
                            <div className={`p-0 ${style.line}`}>
                                <div className={`${style.inLine} ${active>=3 && active!=5 ? style.active : ''}`}></div>
                            </div>
                            <p className={`${active==3 && active!=5 ? style.act : ''}`}> We automate your routine business processes to free up your time, money and energy</p>
                        </a>
                    </Link>
                    <Link href={'/services/mobile-and-web-tracking'}>
                        <a className={`p-0`} id="Analytics">
                            <div className={`${style.textPoints} ${active==4 && active!=5 ? style.act : ''}`}>Analytics</div>
                            <div className={`p-0 ${style.dots} ${active>=4 && active!=5 ? style.active : ''}`}>
                                <div className={`${style.inDots}`}></div>
                            </div>
                            <div className={`p-0 ${style.line}`}>
                                <div className={`${style.inLine} ${active>=4 && active!=5 ? style.active : ''}`} ></div>
                            </div>
                            <p className={`${active==4 ? style.act : ''}`}>We provide analytics services for you to learn your customers behavior</p>
                        </a>
                    </Link>
                    <Link href={'/services/paid-marketing-channels'}>
                        <a className={`p-0 ${style.ASO}`}>
                            <div className={`${style.textPoints} ${active==5 ? style.act : ''}`}>Traffic</div>
                            <div className={`p-0 ${style.fulldot}`}>
                                <div className={style.inDots}></div>
                            </div>
                            <p className={`${active==5 ? style.act : ''}`}>We create and manage advertising campaigns for you to get the best outcome.</p>
                        </a>
                    </Link>
                </div>
                <div className={`row ${style.textUnderContainer}`}>
                    <div className={`p-0 ${style.text}`}>
                        <svg width="16" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 8.97656C16 11.0983 15.1571 13.1331 13.6569 14.6334C12.1566 16.1337 10.1217 16.9766 8 16.9766C5.87827 16.9766 3.84344 16.1337 2.34315 14.6334C0.842855 13.1331 0 11.0983 0 8.97656C0 6.85483 0.842855 4.82 2.34315 3.31971C3.84344 1.81942 5.87827 0.976563 8 0.976562C10.1217 0.976563 12.1566 1.81942 13.6569 3.31971C15.1571 4.82 16 6.85483 16 8.97656ZM9 4.97656C9 5.24178 8.89464 5.49613 8.70711 5.68367C8.51957 5.87121 8.26522 5.97656 8 5.97656C7.73478 5.97656 7.48043 5.87121 7.29289 5.68367C7.10536 5.49613 7 5.24178 7 4.97656C7 4.71135 7.10536 4.45699 7.29289 4.26946C7.48043 4.08192 7.73478 3.97656 8 3.97656C8.26522 3.97656 8.51957 4.08192 8.70711 4.26946C8.89464 4.45699 9 4.71135 9 4.97656ZM7 7.97656C6.80109 7.97656 6.61032 8.05558 6.46967 8.19623C6.32902 8.33689 6.25 8.52765 6.25 8.72656C6.25 8.92547 6.32902 9.11624 6.46967 9.25689C6.61032 9.39754 6.80109 9.47656 7 9.47656H7.253C7.29041 9.47658 7.32734 9.48499 7.36106 9.50117C7.39479 9.51736 7.42445 9.5409 7.44787 9.57008C7.47128 9.59925 7.48785 9.63331 7.49636 9.66973C7.50486 9.70616 7.50508 9.74404 7.497 9.78056L7.038 11.8466C6.98108 12.1025 6.98237 12.3679 7.04179 12.6232C7.10121 12.8785 7.21723 13.1173 7.38129 13.3217C7.54535 13.5262 7.75325 13.6912 7.98963 13.8045C8.22602 13.9179 8.48485 13.9767 8.747 13.9766H9C9.19891 13.9766 9.38968 13.8975 9.53033 13.7569C9.67098 13.6162 9.75 13.4255 9.75 13.2266C9.75 13.0277 9.67098 12.8369 9.53033 12.6962C9.38968 12.5556 9.19891 12.4766 9 12.4766H8.747C8.70959 12.4765 8.67266 12.4681 8.63894 12.452C8.60521 12.4358 8.57555 12.4122 8.55213 12.383C8.52872 12.3539 8.51215 12.3198 8.50364 12.2834C8.49514 12.247 8.49492 12.2091 8.503 12.1726L8.962 10.1066C9.01892 9.85066 9.01763 9.58525 8.95821 9.32992C8.89879 9.07459 8.78277 8.83587 8.61871 8.63139C8.45465 8.42692 8.24675 8.26192 8.01037 8.14858C7.77398 8.03523 7.51515 7.97645 7.253 7.97656H7Z" fill="#3725A2"/>
                        </svg>
                        <p>
                            You can see our services shown here as steps. If the previous steps weren&apos;t completed, they should be done before requesting a particular service. Though, we can do the job ourselves as a part of the package.
                        </p>

                    </div>
                    <div className={`p-0 ${style.text}`}>
                        <svg width="16" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 8.97656C16 11.0983 15.1571 13.1331 13.6569 14.6334C12.1566 16.1337 10.1217 16.9766 8 16.9766C5.87827 16.9766 3.84344 16.1337 2.34315 14.6334C0.842855 13.1331 0 11.0983 0 8.97656C0 6.85483 0.842855 4.82 2.34315 3.31971C3.84344 1.81942 5.87827 0.976563 8 0.976562C10.1217 0.976563 12.1566 1.81942 13.6569 3.31971C15.1571 4.82 16 6.85483 16 8.97656ZM9 4.97656C9 5.24178 8.89464 5.49613 8.70711 5.68367C8.51957 5.87121 8.26522 5.97656 8 5.97656C7.73478 5.97656 7.48043 5.87121 7.29289 5.68367C7.10536 5.49613 7 5.24178 7 4.97656C7 4.71135 7.10536 4.45699 7.29289 4.26946C7.48043 4.08192 7.73478 3.97656 8 3.97656C8.26522 3.97656 8.51957 4.08192 8.70711 4.26946C8.89464 4.45699 9 4.71135 9 4.97656ZM7 7.97656C6.80109 7.97656 6.61032 8.05558 6.46967 8.19623C6.32902 8.33689 6.25 8.52765 6.25 8.72656C6.25 8.92547 6.32902 9.11624 6.46967 9.25689C6.61032 9.39754 6.80109 9.47656 7 9.47656H7.253C7.29041 9.47658 7.32734 9.48499 7.36106 9.50117C7.39479 9.51736 7.42445 9.5409 7.44787 9.57008C7.47128 9.59925 7.48785 9.63331 7.49636 9.66973C7.50486 9.70616 7.50508 9.74404 7.497 9.78056L7.038 11.8466C6.98108 12.1025 6.98237 12.3679 7.04179 12.6232C7.10121 12.8785 7.21723 13.1173 7.38129 13.3217C7.54535 13.5262 7.75325 13.6912 7.98963 13.8045C8.22602 13.9179 8.48485 13.9767 8.747 13.9766H9C9.19891 13.9766 9.38968 13.8975 9.53033 13.7569C9.67098 13.6162 9.75 13.4255 9.75 13.2266C9.75 13.0277 9.67098 12.8369 9.53033 12.6962C9.38968 12.5556 9.19891 12.4766 9 12.4766H8.747C8.70959 12.4765 8.67266 12.4681 8.63894 12.452C8.60521 12.4358 8.57555 12.4122 8.55213 12.383C8.52872 12.3539 8.51215 12.3198 8.50364 12.2834C8.49514 12.247 8.49492 12.2091 8.503 12.1726L8.962 10.1066C9.01892 9.85066 9.01763 9.58525 8.95821 9.32992C8.89879 9.07459 8.78277 8.83587 8.61871 8.63139C8.45465 8.42692 8.24675 8.26192 8.01037 8.14858C7.77398 8.03523 7.51515 7.97645 7.253 7.97656H7Z" fill="#3725A2"/>
                        </svg>
                        <p style={{width:"360px"}}>
                            Since we are a full-service marketing agency, we provide a full range of services as a package.
                            This means that we do not sell services separately, except for ASO.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StepByStep;
