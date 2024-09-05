
import classes from "./button-nextStyles.module.scss"

type ButtonNextProps ={
    checkIfLast:(step: number) => boolean;
    currentKey:number;
    handleSubmit:() => void;
    handleNext:() => void;
}

function ButtonNext({handleSubmit,handleNext,checkIfLast, currentKey}:ButtonNextProps){
    // I need this check to make different type of validation
    const checkTheButton = () =>{
        if(checkIfLast(Number(currentKey))){
            return<button onClick={handleSubmit} 
            className={classes.button}
            type="button">
                Submit
            </button>
        }
        else {
            return <button onClick={handleNext} 
            className={classes.button}
            type="button">
                Next Step
            </button>
        }
    }
    
    return(
            <div className={classes.buttonsWrapper}>
                
                {checkTheButton()}
            </div>
    )
}

export default ButtonNext;