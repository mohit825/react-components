import { ProgressBar } from "./ProgressBar"

export const ProgressBarContainer = () =>{
    return (
        <div>
            <ProgressBar completed={40} />
            <ProgressBar completed={60} />
            <ProgressBar completed={80} />
            <ProgressBar completed={400} />
            <ProgressBar completed={-400} />
        </div>
    )
}