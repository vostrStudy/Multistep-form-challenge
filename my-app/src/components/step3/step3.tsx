import { useState } from "react";
import { StepData } from "../../utils/utils";
import classes from "./step3Styles.module.scss"


type Step3Props ={
    formData:StepData;
}

function Step3({formData}:Step3Props){

    const challenges = [
        'HTML/CSS/JS', 
        'React.js', 
        'AngularJs', 
        'Vue.js'
    ];


    const [activeChallenge, setActiveChallenge] =useState<string[]>([]);
    formData.challenge = activeChallenge

    const handleChallengeChange = (id:string) => {
        setActiveChallenge((prev) => 
            (prev.includes(id)? prev.filter((challenge) => challenge !==id) : [...prev, id])
        );
    }

    return(
        <section>
            <div className={classes.formHeader}>

                <h2 className={classes.header}>Challenge Preference</h2>
                <p className={classes.text}>Please tell us which frontend challenges you would like to participate in.</p>
            </div>
            <div className={classes.form}>
                
                {challenges.map((challenge) => (
                <div key ={challenge} className={classes.formItem}>
                    <input className={classes.input} type="checkbox" id ={challenge} onChange={() => handleChallengeChange(challenge)} checked={activeChallenge.includes(challenge)}></input>
                    <label className ={classes.label} htmlFor ={challenge}>{challenge}</label>
                    
                </div>
                ))}

            </div>
        </section>
    )
}

export default Step3;