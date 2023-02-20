
import styles from './Land.module.css';

export default function Land() {
  return (
      <div id="first-section" className="flex flex-col w-full items-center justify-center h-screen bg-primary">
        <div className='flex max-w-7xl'>
          <div className="flex flex-col justify-center w-1/2 pl-20">
            <div className="text-5xl font-semibold">
              <div className="mb-3">
                Hello,
                <span
                  className="
                    bg-clip-text
                    text-gradient 
                    ml-4
                    bg-gradient-to-r from-pink-hover to-light-orange-hover
                  "
                >
                  I'm Ruivo,
                </span>
              </div>

              <div className="mb-3">software engineer</div>

              <div>tech lead.</div>
            </div>

            <div className="text-base font-thin opacity-70 my-8">
              I am a software engineer tech lead with experience of 3 years in this 3 years I have worked in a software house and actual in a fintech.
            </div>

            <div className="flex gap-x-4">
              <button 
                className="
                  py-2 
                  px-6 
                  rounded-3xl 
                  bg-gradient-to-r from-pink to-light-orange 
                  hover:bg-gradient-to-r hover:from-pink-hover hover:to-light-orange-hover
                " >
                <span className="text-black text-sm font-semibold" >GET IN TOUCH</span>
              </button>

              <button 
                className="
                  py-2 
                  px-6 
                  rounded-3xl 
                  border	
                  hover:bg-bg-primary
                " >
                  <a className="text-black text-sm font-semibold" href="#third-section">VIEW ALL WORKS</a>
              </button>
            </div>
          </div>

          <div className="flex w-1/2 items-center justify-center">
            <div className={styles['trapezoid']}></div>
          </div>
        </div>
      </div>
  );
}
