import Step1 from "../components/step1/step1";
import Step2 from "../components/step2/step2";
import Step3 from "../components/step3/step3";
import Step4 from "../components/step4/step4";
import SuccessPage from "../components/success-page/success-page";

export enum AppRoute {
    Root = '/',
    Catalog = '/catalog',
    Form = '/form',
    Login = '/login',
    NotFound = '/NotFound',
    Result = '/result',

}
//need to change it later//


export enum FormRoute {

    Step1 = '/step1',
    Step2 = '/step1',
    Step3 = '/step1',

}

export const steps ={
    '1': Step1,
    '2': Step2,
    '3': Step3,
    '4': Step4,
    // '5': <SuccessPage/>,
}

export const stepsArr = Object.keys(steps);

export type StepData= {
    name: string,
    email: string,
    phone_number: string,
    gitHub_link: string,
    skill_level:string | null,
    challenge:string[],
}

export type Errors = {
    name: string,
    email: string,
    phone_number: string,
    gitHub_link: string,
}
    
export const checkIfFirst = (step: number): boolean => {
    if (step === Number(1)) {
        return true;
    } else {
        return false;
    }
  };

export const checkIfLast = (step: number): boolean => {
    if (step === Number(stepsArr.length)) {
        return true;
    } else {
        return false;
    }
  };

export const regexLetters =/^[a-zA-Z ]*$/;
export const regexPhoneNumber =/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
export const regexEmail =/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
export const regexGithubLink = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_]{1,25}$/igm;