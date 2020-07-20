import React, { Component } from 'react';
import styles from '../styles/landing.module.css'
import  { Power3, Power1, gsap} from 'gsap'


class Landing extends Component{
  constructor(props){
    super(props)
    this.state = [

    ]
    this.title = React.createRef()
    this.subheading = React.createRef()
    this.img1 = React.createRef()
    this.img2 = React.createRef()
    this.arrow = React.createRef()
    this.btn = React.createRef()
    this.hello = React.createRef()
  }


  async componentDidMount() {
    await this.title.current
    await this.subheading.current
    await this.img1.current
    await this.img2.current
    await this.btn.current
    await this.hello.current


    var tl = gsap.timeline({defaults:{opacity:0}})

    tl.from(this.hello.current, .7, {y:4, ease:Power1.easeInOut, delay:2})
    .from(this.title.current, 1, {y:-4, ease:Power3.easeInOut, delay:.8})
    .from(this.subheading.current, .7, {y:-4, ease:Power3.easeInOut, delay:.7})
    .from(this.img1.current, 2, { x:40, ease:Power3.easeInOut, delay:0})
    .from(this.img2.current, 2, {x:-40, ease:Power3.easeInOut}, "-=2")
    .from(this.btn.current, 1, {y:-10, ease:Power3.easeInOut}, "-=1.5")

    document.getElementById('btn').addEventListener('click', () => {
      window.scrollTo({top:650, behavior:"smooth"})
      //tl.reversed() ? tl.play() : tl.reversed(true)

    })
      
    
  }


  async handleHover(){

  }


  render() {
    return (
        <div className={styles.landing}>
          <div className={styles.info_container}>
            <h3 ref={this.hello}><span>HELLO</span> I'm</h3>
            <h1 ref={this.title} className={styles.title}>Mark Sigilai</h1>
            <h2 ref={this.subheading} className={styles.subtitle}>a junior software developer</h2>
          </div>
          <div ref={this.img1} className={styles.img1}></div>
          <div ref={this.img2} className={styles.img2}></div>
          <button id="btn" ref={this.btn} className={styles.btn} type='button'>
            <h4>Explore</h4>
            <span ref={this.arrow} class="material-icons">keyboard_arrow_down</span>
          </button>
          
        </div>
    )
  }
}

export default Landing;
