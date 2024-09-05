import { useState } from "react";
import { StepData } from "../../utils/utils";
import classes from "./step2Styles.module.scss"

type Step2Props ={
    formData:StepData;
}

function Step2({formData}:Step2Props){
    
    const levels = [
        'beginner', 
        'intermediate', 
        'advanced', 
        'expert'
    ];


    const [activeLevel, setActiveLevel] =useState<string | null>(null);

    const handleLevelChange = (id:string) => {
        setActiveLevel((prev) => (prev === id ? null : id));
    }

    formData.skill_level = activeLevel;
    return(
        <section>
            <div className={classes.formHeader}>

                <h2 className={classes.header}>Skill Level</h2>
                <p className={classes.text}>Please tell us about your skill level in frontend development</p>
            </div>
            <div className={classes.form}>

                {levels.map((level) => (
                    
                    <div key={level} className={classes.formItem}>
                    <input className={classes.input} type="checkbox" onChange={() => handleLevelChange(level)} id ={level} checked={activeLevel===level}></input>
                    <label className ={classes.label} htmlFor ={level}>{level}</label>
                    
                </div>
                ))}
            </div>
        </section>
    )
}

export default Step2;