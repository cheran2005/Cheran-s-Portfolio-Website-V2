

type SimpleButtonProps={
    info_link : string,
    children : React.ReactNode
}
export default function SimpleButton({info_link ,children}: SimpleButtonProps ){
    return(

        <a href={info_link} target="_blank" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-200
            hover:border-gray-300 px-3 py-1 rounded-lg transition-all shadow-sm hover:shadow ">
            {children}
        </a>
    );
}