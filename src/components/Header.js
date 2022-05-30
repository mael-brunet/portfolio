import React, {Component} from 'react'

class Header extends Component {

    constructor(props) {
      super(props);
      // this.state = {
      //   isHidden: false,
      // };
      // this.hideHeader = this.hideHeader.bind(this);
    }

    // hideHeader() {
    //   this.setState(prevState => ({
    //     isHidden: !prevState.isHidden
    //   }));
    // }

    

    render() {

      return (
        <React.Fragment>
            
            <div className='flex flex-col w-20 bg-cyan-50 border-r-2 border-gray-300'>

              <div className='pt-20 text-center'>
                MB
              </div>
              <div className="pt-16 child:pt-10 text-center">
                  <div>1</div> 
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
              </div>

            </div>
         
        </React.Fragment>
      )
    }
  }

export default Header