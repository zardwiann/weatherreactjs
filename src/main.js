
import '../src/main.css'
import img1 from '../src/img/img1.jpg'
 
export default function Home() {
    return (
        <section>
            <header className='p-1 header1  bg-white text-center'>
                <i className="bi bi-cloud fs-1"></i>  Weather Wizard
            </header>
            <div className=" d-flex align-items-center min-vh-100">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className=' text-center'>
                                <img src={img1} className='img1 rounded-circle' />
                            </div>
                            <div className='paragraph text-center mt-3'>
                                <p className='text-white mt-1'>
                                    Welcome to Weather Wizard the ultimate
                                    tool for staying informed about
                                    the weather conditions
                                    wherever you are.
                                </p>
                            </div>
                            <div className='  text-center row m-1 button-start'>
                                <a className='btn  btn-next mt-3  ' href='/weatherwizard'>
                                    Get Started
                                </a>
                            </div>

                        </div>


                    </div>

                </div>

            </div>


           

        </section>
    )
}