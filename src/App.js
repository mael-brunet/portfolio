import React from 'react';

function App() {
  return (
    <React.Fragment>  
      <body class="bg-cyan-200">

      <header class="top-0 h-16 bg-white sticky border-b-4 border-b-black">
        <div class="fixed top-5 right-4 cursor-pointer">
          <span class='flex flex-col space-y-1 items-center'>
          <span class="w-10 h-1 bg-black"></span>
          <span class="w-8 h-1 bg-black"></span>
          <span class="w-6 h-1 bg-black"></span>
          </span>
        </div>
      </header>
      <main class='space-y-36'>
        <section class="h-96 bg-gray-200 flex flex-row justify-center space-x-20 child:mt-20">
          <div class="bg-slate-700 child:text-gray-600 w-1/3 h-3/5 flex flex-row rounded-xl border-2 border-slate-500">
              <div class=" flex flex-col justify-center ml-2 mr-2">
                <div> 1 </div>
                <div> 2 </div>
                <div> 3 </div>
                <div> 4 </div>
                <div> 5 </div>
                <div> 6 </div>
                <div> 7 </div>
                <div> 8 </div>
                <div> 9 </div>
              </div>

              <div class="flex flex-col justify-center">
                <div> a </div>
                <div> a </div>
                <div> a </div>
                <div> a </div>
                <div> a </div>
                <div> a </div>
                <div> a </div>
                <div> a </div>
                <div> a </div>
              </div>
          </div>

          <div>
            <span> Salutation !</span>
            <div>
              Je m'appelle 
              <span> Maël Brunet</span>
            </div>
            <div>
              Lorem Epsilum
            </div>
          </div>
        </section>

        <section class="h-96 bg-gray-200">
          Présentation
        </section>

        <section class="h-96 bg-gray-200">
          Compétences
        </section>

        <section class="h-96 bg-gray-200">
          Expérience pro / projets
        </section>

        <section class="h-96 bg-gray-200">
          Contact
        </section>

      </main>
      <footer class="h-16 bg-gray-700">
        
      </footer>

      </body>
    </React.Fragment>
  );
}

export default App;
