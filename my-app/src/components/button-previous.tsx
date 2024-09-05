
import classes from "./button-previousStyles.module.scss"

type ButtonPreviousProps ={
    handleGoBack:() => void;
    checkIfFirst:(step: number) => boolean;
    currentKey:number;
}

function ButtonPrevious({handleGoBack, checkIfFirst, currentKey}:ButtonPreviousProps){
    return(
            <div className={classes.buttonsWrapper}>
                <button onClick={handleGoBack} 
                    className={`${!checkIfFirst(Number(currentKey)) ? classes.button : classes["first"] }`}
                    type="button">
                        Go Back
                </button>
            
                 
                    
            </div>
    )
}

export default ButtonPrevious;