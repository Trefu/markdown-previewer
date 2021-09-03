import marked from "marked";

export const Previewer = (props) => {
    const renderer = new marked.Renderer();
    const { text } = props
    const markup = marked(text, { breaks: true, sanitize: true, renderer: renderer });

    return (

        <div className="select-none shadow-2xl w-full container mx-auto flex flex-col justify-center z-10">
            <div className=' rounded-t-lg w-full bg-indigo-800 flex justify-end items-center'>
                <h3 className='text-white text-lg mr-8'>Previewer</h3></div>
            <div className='bg-black text-xl ' id='preview' dangerouslySetInnerHTML={{ __html: markup }}></div>
        </div>
    )
}

export default Previewer