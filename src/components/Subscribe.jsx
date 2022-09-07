import Button from './Button'

function Subscribe() {
    return (
        <div id='subscribe' className="bg-cover flex-col md:flex-row mx-auto gap-10 items-center rounded-xl py-10 w-10/12 max-w-4xl px-20 flex bg-no-repeat">
            <div className=' text-center md:text-left w-full md:w-1/2'>
                <h3 className='text-xl font-bold mb-6'>
                    Start Mining Now
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, quis dicta commodi natus, dolorem tempore provident officiis.
                </p>
            </div>
            <form className='flex flex-col justify-center md:items-start items-center'>
                <input className='block placeholder-white outline-none py-2 mb-6 border-b-2 bg-transparent' type="text" placeholder='Enter Message' />
                <Button style='text-secondary bg-white'>
                    Subscribe
                </Button>
            </form>
        </div>
    )
}

export default Subscribe