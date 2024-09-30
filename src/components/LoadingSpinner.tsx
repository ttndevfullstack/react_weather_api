const LoadingSpinner = () => {
  return (
    <div id="webcrumbs"> 
    	<div className='w-[600px] min-h-[700px] bg-neutral-50 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center'>
    	  <div className='w-[80px] h-[80px] border-4 border-primary border-t-transparent border-solid rounded-full animate-spin'></div>
    	  <h1 className='text-2xl font-title mt-6'>Loading...</h1>
    	</div> 
    </div>
  )
}

export default LoadingSpinner;