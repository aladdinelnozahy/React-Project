import './Cards.css';

export default function Card(props) {
    // console.log(props);
    return (
        <>
                    {/* <div className="col">
                        <h5 className=""> {props.title}</h5>
                    </div> */}

            <div className="col p-3 border m-5 rounded-4 text-light" style={{ backgroundColor:`${props.paint}` }}>
            <h5 className="p-3"> {props.title}</h5>
            </div>
        </>
    )

}