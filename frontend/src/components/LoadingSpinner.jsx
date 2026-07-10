function LoadingSpinner() {

    return(

        <div className="text-center mt-10">

            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto"></div>
            <p className="mt-4 text-slate-400">

            Comparing all chunking strategies...

            </p>
        </div>

    )

}

export default LoadingSpinner;