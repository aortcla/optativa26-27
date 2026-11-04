import './ButtonOk.css';

export function ButtonOk(){
    return(
        <>
            <button>
                <label>Click me!!!</label>
                <img src={location.href + "src/assets/react.svg"} alt="logo-react"/>
            </button>
            <h5>info Button</h5>
        </>
        
    )
}