
const TextEditor = () => {
    return (
        <div className='shadow-2xl w-2/3 container mx-auto flex flex-col  bg-purple-400 mb-10'>
            <div className='rounded-t-lg w-full bg-purple-700 flex justify-end items-center'>
                <h3 className='text-lg text-white pr-5'>Editor</h3>
                <i className="p-1 bg-purple-200 rounded-md fas fa-marker mr-5"></i></div>
            <textarea id='editor' className="border rounded-md bg-purple-300" name="editor" id="editor"></textarea>
        </div>
    )
}


export default TextEditor