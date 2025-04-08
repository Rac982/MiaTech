const ShowButton = ({ isActive, activeLable, inactiveLable, onClick }) => {
    return(
        <button onClick={onClick}>
            {isActive ? activeLable : inactiveLable}
        </button>
    )
}

export default ShowButton;