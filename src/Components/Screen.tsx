type Props={
    children:React.ReactNode;
}

export default function Screen({children}:Props){
    return(
        <div className="
        h-screen
        flex
        flex-col
        items-center
        justify-center
        bg-black
        text-white
        text-center
        px-6
        py-2
        
        ">
        {children}
        </div>
    )
}