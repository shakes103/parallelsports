import { useState, useEffect, useRef} from "react";
//import Image from "next/image";
import Isotope from "isotope-layout";

const IsotopeNext = () => {
    // init one ref to store the future isotope object
    const isotope = useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState('*')
  
    // initialize an Isotope object with configs
    useEffect(() => {
      isotope.current = new Isotope('.filter-container', {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
      })
      // cleanup
      return () => isotope.current.destroy()
    }, [])
  
    // handling filter key change
    useEffect(() => {
      filterKey === '*'
        ? isotope.current.arrange({filter: `*`})
        : isotope.current.arrange({filter: `.${filterKey}`})
    }, [filterKey])
  
    const handleFilterKeyChange = key => () => setFilterKey(key)
  
    return (
      <section id="portfolio" classNameName="portfolio">
      <div classNameName="container">

        <div classNameName="section-title">
            <h2>Portfolio</h2>
            <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit</p>
        </div>
        
        
        <div classNameName="row">
          <div classNameName="col-lg-12">
            <ul>
            <li onClick={handleFilterKeyChange('*')} classNameName="filter-active">Show All</li>
            <li onClick={handleFilterKeyChange('school')}>Show School</li>
            <li onClick={handleFilterKeyChange('park')}>Show Park</li>
            <li onClick={handleFilterKeyChange('indoor')}>Show Indoor</li>
            </ul>
          </div>
        </div>
        <hr />

        
        <ul classNameName="row filter-container">
        <div classNameName="portfolio-wrap">
          <div classNameName="col-lg-4 col-md-6 filter-item school wow fadeInUp">
            <span>Parklane</span>
          </div>
        </div>
        <div classNameName="portfolio-wrap">
          <div classNameName="col-lg-4 col-md-6 filter-item park wow fadeInUp">
            <span>Parklane</span>
          </div>
        </div>
        <div classNameName="portfolio-wrap">
          <div classNameName="col-lg-4 col-md-6 filter-item park wow fadeInUp">
            <span>Harrow Lodge park</span>
          </div>
        </div>
        <div classNameName="portfolio-wrap">
          <div classNameName="col-lg-4 col-md-6 filter-item indoor wow fadeInUp">
            <span>YMCA</span>
          </div>
        </div>
        </ul>
        </div>
        </section>
    )
  }

  export default IsotopeNext