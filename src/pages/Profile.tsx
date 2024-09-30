const Profile = () => {
  return (
    <div id="webcrumbs"> 
    	<div className='w-[600px] min-h-[700px] bg-neutral-50 rounded-lg shadow-lg p-8 flex flex-col items-center'>
    	  <div className='relative w-[150px] h-[150px] rounded-full overflow-hidden mb-6'>
    	    <img 
    	      src='https://tools-api.webcrumbs.org/image-placeholder/150/150/profile,avatar/1' 
    	      alt='Profile'
    	      className='object-cover w-full h-full'
    	    />
    	  </div>
    	
    	  <h1 className='text-3xl font-title'>John Doe</h1>
    	  <p className='text-lg text-neutral-600 mb-4'>Software Engineer</p>
    	
    	  <div className='w-full flex justify-around mb-6'>
    	    <a href='https://icons8.com' className='w-[40px] h-[40px]'>
    	      <img 
    	        src='https://img.icons8.com/color/48/000000/facebook.png' 
    	        alt='Facebook' 
    	        className='object-cover w-full h-full'
    	      />
    	    </a>
    	    <a href='https://icons8.com' className='w-[40px] h-[40px]'>
    	      <img 
    	        src='https://img.icons8.com/color/48/000000/linkedin.png' 
    	        alt='LinkedIn' 
    	        className='object-cover w-full h-full'
    	      />
    	    </a>
    	    <a href='https://icons8.com' className='w-[40px] h-[40px]'>
    	      <img 
    	        src='https://img.icons8.com/color/48/000000/twitter.png' 
    	        alt='Twitter' 
    	        className='object-cover w-full h-full'
    	      />
    	    </a>
    	  </div>
    	
    	  <details className='w-full flex flex-col'>
    	    <summary className='cursor-pointer bg-primary text-white p-4 rounded-md flex items-center justify-between'>
    	      More Information
    	      <span className='material-symbols-outlined'>expand_more</span>
    	    </summary>
    	    <div className='p-4 bg-neutral-50 border border-neutral-200 rounded-xs'>
    	      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel risus lacus. Nulla facilisi.</p>
    	    </div>
    	  </details>
    	
    	  <a href="/settings" className='bg-primary text-white px-6 py-3 rounded-md mt-auto'>
    	    Edit Profile
    	  </a>
    	</div> 
    </div>
  )
}

export default Profile;