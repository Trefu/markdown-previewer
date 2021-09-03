
export const TextEditor = (props) => {
    const { text, changeText } = props;
    const handleChange = (e) => {
        changeText(e.target.value)
    }
    return (
        <div className='hover:shadow-2xl text-xl transform duration-300 shadow-md w-full container mx-auto flex flex-col bg-black mb-10 z-10'>
            <div className='rounded-t-lg w-full bg-indigo-800 flex justify-end items-center'>
                <h3 className='text-lg text-white pr-5'>Editor</h3>
                <i className="p-1  fas fa-marker mr-5"></i>
            </div>
            <textarea onChange={handleChange} id='editor' className=" bg-black rounded-b-lg text-white resize-y " name="editor" defaultValue={text} />

        </div>
    )
}


export default TextEditor