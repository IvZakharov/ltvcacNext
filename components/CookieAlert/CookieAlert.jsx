import style from './CookieAlert.module.scss';

function CookieAlert({ onClickClose }){
    return(
        <div className={style.cookie} id="CookieAler">
            <div className="container">
                <div className={`row justify-content-center ${style.mob}`}>
                    <div className={style.textBlock}>
                        <p>
                            We use cookies to improve your experience on the website.
                            By staying on our site you consent to our use of cookies.
                        </p>
                    </div>
                    <div className={style.buttonBlock}>
                        <button onClick={() => onClickClose(false)}>
                            Good
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CookieAlert;