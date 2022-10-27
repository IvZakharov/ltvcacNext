import {MainLayout} from "../layouts/MainLayout";
import style from "../styles/404.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function FourOhFour(){
    return (
        <MainLayout
        title={'404 Page Not Found - LTV:CAC agency'}
        description={
            'We can\'t seem to find the page you\'re looking for.\n' +
            'Error code: 404\n'
        }
    >
        <div className="pt-140 pb-120 pb-md-100 pt-md-100 pt-xl-190 pb-xl-190">
            <div className={`container ph-20 ${style.errorPage}`}>
                <div className="row">
                    <div className="col-6 col-md-6 col-xl-6 m-auto">
                        <h1 className="mb-4">Oops!</h1>
                        <p className={style.message}>We can&apos;t seem to find the page you&apos;re looking for.<br />
                            Error code: 404</p>

                        <div className={style.helpBlock}>
                            <span className={style.helpText}>Here are some helpful links instead:</span>
                            <div className={style.linksBlock}>
                                <Link href={'/'}>
                                    <a className={style.link}>Home</a>
                                </Link>
                                <Link href={'/portfolio'}>
                                    <a className={style.link}>Portfolio</a>
                                </Link>
                                <Link href={'/services'}>
                                    <a className={style.link}>Services</a>
                                </Link>
                                <Link href={'/contacts'}>
                                    <a className={style.link}>Contacts</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <Image src="/img/404.png"
                            width={575}
                            height={244}
                        />
                        <span className={style.errorCode}>Error code: 404</span>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
    );

}

