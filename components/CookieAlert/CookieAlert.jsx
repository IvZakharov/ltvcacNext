import style from './CookieAlert.module.scss';
import Cookies from 'js-cookie'


function CookieAlert({ onClickClose }){
    function setOff(){
        Cookies.set('Cookies', 'true')
        onClickClose(false)
    }
    return(
        <div className={style.cookie} id="CookieAler">
            <div className="container">
                <div className={`row justify-content-center ${style.mob}`}>
                    <div className={style.textBlock}>
                        <p>
                            We use cookies to improve your experience on this website.
                            By staying on the site you consent to our use of cookies.
                        </p>
                    </div>
                    <div className={style.buttonBlock}>
                        <button onClick={() => setOff()}>
                            Got it
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CookieAlert;
