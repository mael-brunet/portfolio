import React from 'react';
import Header from './components/Header'

function App() {
  return (
    <React.Fragment > 
      
      <div className='overflow-hidden h-screen'>

        <div className='flex h-full'>

        <Header/>

        <main className='space-y-36 bg-cyan-100 overflow-y-auto w-full child:mx-auto child:my-0'>
          <span></span>
          <div className='h-full w-full'>
          <section className="mx-auto bg-cyan-200 flex flex-row justify-center space-x-20 child:mt-20 shadow-lg h-4/6 w-5/6">
            <div className="bg-slate-700 child:text-gray-600 w-1/3 h-3/5 flex flex-row rounded-xl border-4 border-slate-500">
                <div className=" flex flex-col justify-center ml-2 mr-2">
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

                <div className="flex flex-col justify-center">
                  <div> &lt;div&gt; </div>
                  <div> Change la font !!! </div>
                  <div> Et la couleur du texte </div>
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
          </div>
          <section className="bg-cyan-200">
            Présentation
          </section>

          <section className="bg-cyan-200">
            Compétences
          </section>

          <section className="bg-cyan-200">
            Expérience pro / projets
          </section>

          <section className="bg-cyan-200">
            Contact
          </section>

          <footer className="bg-gray-700">
          
          </footer>
          
        </main>
      </div>
    </div> 
  </React.Fragment>
  );
}

export default App;
