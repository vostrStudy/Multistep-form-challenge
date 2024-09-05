import Steps from "../components/steps"
import classes from "./mainStyles.module.scss"


function MainPage(){
    
    return(
        <div className={`page page--main ${classes.pageWrapper}`}>
            <header className = {classes.headerWrapper}>
                <h1 className='visually-hidden'>Header</h1>
                <h2 className ={classes.header}>Join our Community of Developers</h2>
                <p className={classes.text}>To join our community and participate in frontend challenges.<br/>Please fill out the following form</p>
            </header>
            <main className="page__main page__main--index">
                <h1 className="visually-hidden">Multistep</h1>
                <div className={classes.stepWrapper}>
                    <Steps/>
                </div>
            </main>
        </div>

    )
}

export default MainPage