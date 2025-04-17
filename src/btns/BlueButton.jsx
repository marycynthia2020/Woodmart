const BlueButton = (props) => {
  return (
    <button className='text-white bg-[#004aa8] p-3 px-8 w-fit' onClick={props.handleClick}>
    {props.title}
    </button>
  )
}

export default BlueButton