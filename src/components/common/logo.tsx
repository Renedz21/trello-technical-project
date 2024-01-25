import LogoImage from '@/assets/images/trello_logo.webp'

const Logo = () => {
    return (
        <a href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 flex justify-center">
                <img
                    src={LogoImage}
                    className='w-[150px] h-auto object-contain'
                    alt="Logo"
                />
            </div>
        </a>
    )
}

export default Logo