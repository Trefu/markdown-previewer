const Previewer = (props) => {
    return (

        <div className="shadow-2xl w-2/3 container mx-auto flex flex-col justify-center bg-purple-400 text-white">
            <div className=' rounded-t-lg w-full bg-purple-700 flex justify-end items-center'>
                <h3 className='text-lg mr-8'>Previewer</h3></div>
            <div className='bg-purple-300 ' id='preview'></div>
        </div>
    )
}

export default Previewer