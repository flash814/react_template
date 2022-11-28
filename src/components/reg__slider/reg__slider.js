import {} from '../reg__slider/reg__slider.scss'



export const reg__slider = ({children}) => {

    
    return (
        <div className="register">
            <div className="container">
        <div className="window">
        <div className="reg__slider" >{children}</div>
        </div>
        </div>
        </div>
    )
}