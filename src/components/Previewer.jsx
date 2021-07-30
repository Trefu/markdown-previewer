import marked from "marked";
const Previewer = (props) => {
    const renderer = new marked.Renderer();
    const { text } = props
    const markup = marked(text, { breaks: true, sanitize: true, renderer: renderer });

    return (
        <div className="shadow-2xl w-2/3 container mx-auto flex flex-col justify-center bg-purple-400 ">
            <div className=' rounded-t-lg w-full bg-purple-700 flex justify-end items-center'>
                <h3 className='text-white text-lg mr-8'>Previewer</h3></div>
            <div className='bg-purple-300 ' id='preview' dangerouslySetInnerHTML={{ __html: markup }}></div>
        </div>
    )
}

export default Previewer