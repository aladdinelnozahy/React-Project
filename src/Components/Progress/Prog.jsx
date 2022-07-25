import './Prog.css';

export default function prog(props) {
    // console.log(props);
    return (
        <>
            <div className="row m-3 col">
                <span className="spa col-3">{props.title}</span>
                <div class="bar progress col-5"></div>
            </div>        
        </>
    )

}