import classes from "./step4Styles.module.scss"

type Step4Props ={
    name:string;
    email:string;
    phone:string;
    link:string;
    level:string |null;
    challenge:string[];
}

function Step4({name,email,phone,link,level, challenge}:Step4Props){
//all the text comes from props from previous steps//
    return(
        <section>
            <div className={classes.formHeader}>

                <h2 className={classes.header}>Review and Confirm</h2>
                <p className={classes.text}>Please review your information to make sure everything is accurate.</p>
            </div>

            <div className={classes.form}>
                
                <ul className={classes.infoList}>
                    <li className={classes.infoItem}>
                        <h3 className={`${classes.infoHead} list`}>Full Name</h3>
                        <p className={classes.data}>{name}</p>
                    </li>
                    <li className={classes.infoItem}>
                        <h3 className={`${classes.infoHead} list`}>Email</h3>
                        <p className={classes.data}>{email}</p>
                    </li>
                    <li className={classes.infoItem}>
                        <h3 className={`${classes.infoHead} list`}>Phone Number</h3>
                        <p className={classes.data}>{phone}</p>
                    </li>
                    <li className={classes.infoItem}>
                        <h3 className={`${classes.infoHead} list`}>Github Link</h3>
                        <p className={classes.data}>{link}</p>
                    </li>
                    <li className={classes.infoItem}>
                        <h3 className={`${classes.infoHead} list`}>Level</h3>
                        <p className={classes.data}>{level}</p>
                    </li>
                    <li className={classes.infoItem}>
                        <h3 className={`${classes.infoHead} list`}>Challenge</h3>
                        <ul className ={`${classes.challengeList} list`}>
                            {challenge.map((eachChallenge) =>(
                                <li key ={eachChallenge} className={classes.data}>{eachChallenge}</li>
                        ))}
                        </ul>
                    </li>
                    
                </ul>


            </div>
        </section>
    )
}

export default Step4;