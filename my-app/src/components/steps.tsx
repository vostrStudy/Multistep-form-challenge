import {useState } from "react";
import { checkIfFirst, checkIfLast, regexEmail, regexGithubLink, regexLetters, regexPhoneNumber, steps, stepsArr } from "../utils/utils";
import ButtonNext from "./button-next";
import ButtonPrevious from "./button-previous";
import ProgressBar from "./progress-bar";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import Step4 from "./step4/step4";
import classes from "./stepsStyles.module.scss"
import SuccessPage from "./success-page/success-page";

function Steps(){

    const [currentKey, setCurrentKey] = useState(1);
    
    const checkIfSuccessScreen =() => {
        if(currentKey === stepsArr.length+1){
            return true
        }
    }


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        gitHub_link: '',
        skill_level:'',
        challenge:[''],
      });

    //errors only for inputs//
    const [error, setError] = useState({
        name: '',
        email: '',
        phone_number: '',
        gitHub_link: '',
    })



    const changeName =(e: React.ChangeEvent<HTMLInputElement>) => {
        const value= e.target.value;
        if (regexLetters.test(value)) {
            setError({
                ...error,
                name:('')
            });
          } else {
            setError({
                ...error,
                name:('you can only use letters!')
            });
        }

        if (value == '') {
            setError({
                ...error,
                name:('fill in the name loser!')
            })
        } else if (value.length >=20) {
            setError ({
                ...error,
                name:('your stupid name is too long!')
            })
        }
        else if (value.length<=3) {
            setError ({
                ...error,
                name:('your stupid name is too short!')
            })
        }

        setFormData({
            ...formData,
            name:e.target.value
        })
        
    }

    const changeEmail =(e: React.ChangeEvent<HTMLInputElement>) => {
        const value= e.target.value;
        if (regexEmail.test(value)) {
            setError({
                ...error,
                email:('')
            });
          } else {
            setError({
                ...error,
                email:('invalid format')
            });
        }
        setFormData({
            ...formData,
            email:e.target.value
        })
    }

    const changePhone =(e: React.ChangeEvent<HTMLInputElement>) => {
        const value= e.target.value;
        if (regexPhoneNumber.test(value)) {
            setError({
                ...error,
                phone_number:('')
            });
          } else {
            setError({
                ...error,
                phone_number:('you can only use numbers!')
            });
        }
        if (value == '') {
            setError({
                ...error,
                phone_number:('fill in the phone number loser!')
            })
        } else if (value.length >=12) {
            setError ({
                ...error,
                phone_number:('your stupid phone number is too long!')
            })
        }
        else if (value.length<=3) {
            setError ({
                ...error,
                phone_number:('your stupid phone number is too short!')
            })
        }
        setFormData({
            ...formData,
            phone_number:e.target.value
        })
    }

    const changeLink =(e: React.ChangeEvent<HTMLInputElement>) => {
        const value= e.target.value;
        if (regexGithubLink.test(value)) {
            setError({
                ...error,
                gitHub_link:('')
            });
          } else {
            setError({
                ...error,
                gitHub_link:('invalid format')
            });
        }
        setFormData({
            ...formData,
            gitHub_link:e.target.value
        })
    }
    
    const handleGoBack =() =>{
        setCurrentKey((prevKey) => (prevKey) - 1);
    } 
    
    const handleNext =() => {
        const allFiealdsAreValid = Object.values(error).every((element) => element === '');

            if (allFiealdsAreValid) {
                setCurrentKey((prevKey) => (prevKey) + 1);
            } else{
                alert('check for the ERRORS')
            return
        }
    }
    const handleSubmit  = ()=> {
        const allFiealdsAreValid = Object.values(error).every((element) => element === '');
        const allFieldsAreFilled= Object.values(formData).every((value) => value !== '');

            if (allFiealdsAreValid && allFieldsAreFilled) {
                setCurrentKey((prevKey) => (prevKey) + 1);
            } else{
                alert('go back and fill in the form!')
            return
        }
    }



    const renderStep = () => {
        switch (currentKey) {
            case 1:
                return <Step1 
                    formData={formData}
                    error={error} 
                    changeName={changeName} 
                    changeEmail={changeEmail} 
                    changePhone ={changePhone} 
                    changeLink={changeLink}
                />;
            case 2:
                return <Step2
                formData={formData}
                />;
            case 3: 
                return <Step3
                formData={formData}
                />;
            case 4: 
                return <Step4 
                    name={formData.name} 
                    email={formData.email} 
                    phone={formData.phone_number} 
                    link={formData.gitHub_link}
                    level={formData.skill_level}
                    challenge={formData.challenge}
                />;
            default:
                return <SuccessPage/>;
        }
      };

     
    return(
        <section className={classes.sectionWrapper}>
            <div className={`${checkIfSuccessScreen() ? classes["successScreen"] : classes.progressBarWrapper}`}>
                <ProgressBar
                    currentKey ={currentKey}
                    checkIfFirst={checkIfFirst}
                />
            </div>
            <div className={classes.formWrapper}>
                {renderStep()}
            </div>
            <div className= {`${checkIfSuccessScreen() ? classes["successScreen"] : classes.buttonsWrapper}`}>
                <ButtonPrevious
                    handleGoBack={handleGoBack}
                    checkIfFirst={checkIfFirst}
                    currentKey ={currentKey}
                />
                <ButtonNext
                    checkIfLast={checkIfLast}
                    currentKey ={currentKey}
                    handleSubmit={handleSubmit}
                    handleNext={handleNext}
                />
                
            </div>
    
        </section>
    )
}

export default Steps;