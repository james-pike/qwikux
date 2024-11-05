import { component$, useStore } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";

import { Logo } from "./Logo";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
  });

  const { menu } = useContent();

  const handleNav = () => {
  }

  return (
     <header class='fixed top-0 w-full py-0 backdrop-blur border-b  border-b-brand-outline flex-none bg-gradient-to-r from-blue-100 to-slate-200 lg:bg-transparent z-30'>
        <div class='max-w-8xl mx-auto'>
          <div class='py-0 mx-4 lg:px-8 lg:mx-0'>
            <div class='relative flex items-center gap-8'>
              <a class='flex items-center h-20' href='/' aria-current='page'>
                <span class='sr-only'>Paul Scanlon'ss Site</span>
                <Logo />
              </a>
              <div class='relative flex lg:hidden items-center ml-auto'>
              <a
                href="/contact"
                class="btn bg-blue-500 btn-primary ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto"
              >
                Contact Us
              </a>
                <button
                  id='menu'
                  class='not-prose ml-auto flex items-center justify-center text-brand-text'
                  onClick$={handleNav}
                >
                  <span class='sr-only'>Navigation</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      id='menuPath'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                    
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>  );
});
