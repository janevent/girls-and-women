
export default function Modal( {display, handleClose, children}){
    const displayOrNotDisplay = display ? "Modal display-block" : "Modal display-none"

    return(
        <div className={displayOrNotDisplay}>
            <h2>Payment Details</h2>
            <button onClick={handleClose}>Close</button>
        </div>
    )
}