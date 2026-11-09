import './ButtonOk.css';

export function ButtonOk(){

    function pushButton(e){
        console.dir(e.target);
    }

    return(
        <>
            <button onClick={ () => {pushButton("2DAW")}}>
                <label>Click me!!!</label>
                <img src={location.href + "src/assets/react.svg"} alt="logo-react"/>
            </button>
            <h5>info Button</h5>
        </>
        
    )
}