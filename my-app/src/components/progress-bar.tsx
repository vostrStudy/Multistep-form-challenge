import classes from "./progress-barStyles.module.scss"
import {stepsArr } from "../utils/utils";

type ProgressBarProps ={
    currentKey:number;
    checkIfFirst:(step: number) => boolean;
}

//TO DO: 
// animation for the progress bar
// align niceley pseudoelement

function ProgressBar({currentKey, checkIfFirst}: ProgressBarProps){
    
      const checkIfActive = (step: number): boolean => {
        if (step <= Number(currentKey)) {
            return true;
        } else {
            return false;
        }
      };

    return(
        <section className={classes.barWrapper}>
            {stepsArr.map((step)=>(
                <div key ={step} 
                className={classes.stepWrapper}>
                    <p className={`${checkIfActive(Number(step)) ? classes["number--active"] : classes.number} 
                    ${checkIfFirst(Number(step)) ? classes.first : ''}`}>{step}</p>
                </div>)
            )}

        </section>
    )
}

export default ProgressBar;