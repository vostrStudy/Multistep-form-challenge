import classes from "./success-pageStyles.module.scss"

function SuccessPage(){

    return(
        <section>
            <div className={classes.formHeader}>

                <h2 className={classes.header}>Congratulations!</h2>
                <p className={classes.text}>Your profile has been created and you are ready to start participating in challenges that match your interests and coding experience level.</p>            
            </div>
            
        </section>
    )
}

export default SuccessPage;