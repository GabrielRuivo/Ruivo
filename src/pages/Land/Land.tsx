import styles from './Land.module.css';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';

export default function Land() {
  return (
      <div id="first-section" className="flex flex-col w-full items-center justify-center h-screen bg-primary dark:bg-bg-primary-dark dark:text-text-primary-dark transition-colors duration-200">
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
              I am a software engineer tech lead with experience of 5 years in this 5 years I have worked in a software house and actual in a fintech.
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
                <a href="https://wa.me/5543991312390" className="text-black text-sm font-semibold">LET'S TALK</a>
              </button>

              <button 
                className="
                  py-2 
                  px-6 
                  rounded-3xl 
                  border	
                  hover:bg-bg-primary
                  dark:hover:bg-bg-secondary-dark
                  dark:text-white
                  transition-colors
                  duration-200
                " >
                  <a className="text-black dark:text-white text-sm font-semibold transition-colors duration-200" href="#third-section">VIEW ALL WORKS</a>
              </button>

              <ThemeToggle />
            </div>
          </div>

          <div className="flex w-1/2 items-center justify-center">
            <div className={styles['trapezoid']}></div>
          </div>
        </div>
      </div>
  );
}
