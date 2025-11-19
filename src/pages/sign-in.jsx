import { Button } from "../atoms/Button.jsx/Button"

export const SignIn = () =>{
    return (
        <div>
            <Button btnName={'Sign In'} variant="Primary"/>
            <Button btnName={'Sign In'} variant="Secondary"/>
            <Button btnName={'Sign In'} variant="Neutral"/>
            <Button btnName={'Sign In'} variant="Danger"/>
            <Button btnName={'Sign In'} variant="Warning"/>
        </div>
    )
}