import { Errors, StepData } from "../../utils/utils";
import classes from "./step1Styles.module.scss"

type Step1Props ={
    formData:StepData;
    error:Errors;
    changeName:(e: React.ChangeEvent<HTMLInputElement>) => void;
    changeEmail:(e: React.ChangeEvent<HTMLInputElement>) => void;
    changePhone:(e: React.ChangeEvent<HTMLInputElement>) => void;
    changeLink:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Step1({changeName,changeEmail,changePhone,changeLink, formData, error}:Step1Props){

    return(
        <section>
            <div className={classes.formHeader}>

                <h2 className={classes.header}>Personal Information</h2>
                <p className={classes.text}>Please provide your personal details so we can get to know you better</p>
            </div>
            <div className={classes.form}>
                
                <div className={classes.formItem}>
                    <label className ={classes.label} htmlFor ="name">Full Name</label>
                    <input className={classes.input} type="text" name="name" id ="name" value={formData.name} onChange={changeName} placeholder="Nickolas Cage" ></input>
                    {error && <p style={{ color: 'red' }}>{error.name}</p>}
                </div>
                <div className={classes.formItem}>
                    <label className ={classes.label} htmlFor ="email">Email Adress</label>
                    <input className={classes.input} type="email" name="email" id ="email" value={formData.email} onChange={changeEmail} placeholder="name@email.com"></input>
                    {error && <p style={{ color: 'red' }}>{error.email}</p>}
                </div>
                <div className={classes.formItem}>
                    <label className ={classes.label} htmlFor ="phone">Phone Number</label>
                    <input className={classes.input} type="tel" name="phone" id ="phone" value={formData.phone_number} onChange={changePhone} placeholder="+91 1111111"></input>
                    {error && <p style={{ color: 'red' }}>{error.phone_number}</p>}
                </div>
                <div className={classes.formItem}>
                    <label className ={classes.label} htmlFor ="link">Portfolio/GitHub Link</label>
                    <input className={classes.input} type="text" name="link" id ="link" value={formData.gitHub_link} onChange={changeLink} placeholder="github.com/notTheBEEES"></input>
                    {error && <p style={{ color: 'red' }}>{error.gitHub_link}</p>}
                </div>

            </div>
        </section>
    )
}

export default Step1;