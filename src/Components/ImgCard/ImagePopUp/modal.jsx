import './modal.css'

function Modal({close, source, alt, id, height, width, likes, date}) {

    const num = new Date(date)
    const now = num.toDateString()

  return (
    <>
    <div className="background" onClick={() => {close()}}></div>
    <div className='modalCard' onClick={() => {}}>
        <div>
            <h3>IMAGE DATA</h3>
            <ul>
                <li>{width}px</li>
                <li>{height}px</li>
                <li>{likes}</li>
                <li>{now}</li>
            </ul>
        </div>
        <div>
            <h3>NEW DESCRIPTION</h3>
            <input type="text" defaultValue={alt} />
            <button>SAVE</button>
        </div>
    </div>
    </>
  )
}

export default Modal