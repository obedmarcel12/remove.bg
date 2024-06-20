import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import manuel from '../assets/manuel_compressed.mp4'
import thumbOne from '../assets/thumb-one.jpg'
import thumbTwo from '../assets/thumb-two.jpg'
import thumbThree from '../assets/thumb-three.jpg'
import thumbFour from '../assets/thumb-four.jpg'
import baby from '../assets/baby.png'
import allPage from '../assets/all-pages-2.png'
import john1 from '../assets/john1.jpg'
import johntrans from '../assets/john-trans-2.jpg'
import john3 from '../assets/john3.png'
import john4 from '../assets/john4.jpg'
import developers from '../assets/developers-4.png'
import sony from '../assets/sony-logo.jpg'
import phoenix from '../assets/phoenix.png'
import tech from '../assets/techcrunch.svg'
import authorOne from '../assets/author-one.jpg'
import authorTwo from '../assets/author-two.jpg'
import authorThree from '../assets/author-three.jpg'
import manone from '../assets/man-one.jpg'
import lion from '../assets/lion-two.jpg'
import car from '../assets/car-three.jpg'
import room from '../assets/room-four.jpg'
const Main = () => {
  const [image, setImage] = useState(null)
  const navigate = useNavigate()
  const fileInputRef = useRef(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImage(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (image) {
      navigate('/remove-background', { state: { image } })
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  return (
    <main className=" w-full  flex flex-col items-center justify-center">
      <div className=" md:flex md:flex-row flex flex-col  items-center md:mt-0 mt-[3cm] gap-12 ">
        <section className=" flex flex-col gap-6 items-center ">
          <video
            className=" md:w-[35vw]  md:h-[45vh] w-[90vw] h-[35vh] rounded-[30px]"
            controls
          >
            <source src={manuel} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className=" flex flex-col md:items-start items-center justify-center md:justify-center text-[#555555]">
            <b className=" font-bold font-sans md:text-7xl text-4xl">
              Remove Image
            </b>
            <b className="font-bold font-sans md:text-7xl text-4xl pt-2">
              Background
            </b>
            <span className=" font-medium pt-5 md:text-[4.2vh] font-sans text-[3vh]">
              100% Automatically and
              <span className=" bg-yellow-600 py-1 px-4 md:rounded-bl-full rounded-tl-full    ">
                Free
              </span>
            </span>
          </div>
        </section>

        <div className=" flex flex-col md:pt-[7cm] gap-7">
          <section className=" md:w-[32vw] md:h-[58vh] flex justify-center items-center bg-[#fff] rounded-[30px] shadow-2xl">
            <div className=" flex flex-col items-center justify-center gap-7">
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className=" hidden"
                />
                <button
                  className=" md:w-[16vw] md:h-[9.8vh] w-[89vw] h-[8vh] rounded-full text-white bg-blue-700 text-2xl font-sans font-semibold "
                  onClick={handleButtonClick}
                >
                  Upload Image
                </button>
                {image && (
                  <button
                    className=" w-[12vw] h-[9vh] bg-slate-950 hover:bg-slate-900 text-white font-sans font-semibold rounded-md ml-4 "
                    onClick={handleSubmit}
                  >
                    Remove Background
                  </button>
                )}
              </div>

              <div className="  md:flex hidden flex-col gap-1 text-center text-[#555555]">
                <b className=" font-sans font-bold text-[3.5vh]">
                  or drop a file,
                </b>
                <small>paste image or URL</small>
              </div>
            </div>
          </section>
          <section className=" flex flex-col gap-4">
            <ul className=" md:flex md:flex-row flex flex-col items-center md:gap-5 gap-3">
              <p className=" md:block hidden font-sans font-bold text-[#555555] ">
                No image? <br /> Try one of these:
              </p>
              <p className=" md:hidden font-sans font-bold text-[#555555] ">
                No image? Try one of these:
              </p>
              <div className=" flex gap-3  items-center">
                <img
                  src={thumbOne}
                  alt=""
                  className=" inline md:h-[11vh] h-[7vh] rounded-lg"
                />
                <img
                  src={thumbTwo}
                  alt=""
                  className=" md:h-[11vh] h-[7vh] rounded-lg"
                />
                <img
                  src={thumbThree}
                  alt=""
                  className=" md:h-[11vh] h-[7vh] rounded-lg"
                />
                <img
                  src={thumbFour}
                  alt=""
                  className=" md:h-[11vh] h-[7vh] rounded-lg"
                />
              </div>
            </ul>
            {/*  */}
            <span className=" md:block hidden font-sans font-medium text-[#555555] md:text-[0.8vw]">
              By uploading an image or URL you agree to our Terms of Service. To
              learn more about how <br /> remove.bg handles your personal data,
              check our Privacy Policy.
            </span>
            <span className=" md:hidden block font-sans font-medium text-[#555555] md:text-[0.8vw] text-center text-[1.3vh]">
              By uploading an image or URL you agree to our Terms of Service. To{' '}
              <br />
              learn more about how <br /> remove.bg handles your personal data,
              check <br /> our Privacy Policy.
            </span>
          </section>
        </div>
      </div>
      {/*  */}

      <section className=" w-full md:h-[170vh] h-[69vh] justify-center items-center flex">
        <div className=" w-full flex flex-col items-center justify-center gap-7">
          <ul className=" font-sans md:font-bold md:text-[4vw] text-[9vw] font-extrabold md:text-[#555555] text-[#1d1c1c]">
            Stunning Quality
          </ul>
          <div className=" flex flex-col items-center justify-center gap-7">
            {/* md */}
            <nav className="hidden md:flex gap-14 font-sans font-semibold text-[3vh] items-center">
              <ul className=" w-[8vw] h-[7.5vh] flex items-center justify-center bg-gray-200 rounded-[30px]">
                <p>People</p>
              </ul>
              <p className=" hover:text-yellow-700">products</p>
              <p className=" hover:text-yellow-700">Animals</p>
              <p className=" hover:text-yellow-700">Cars</p>
              <p className=" hover:text-yellow-700">Graphics</p>
            </nav>
            {/* sm */}
            <nav className=" md:hidden flex md:gap-14 gap-[5vh] font-sans font-semibold md:text-[3vh] text-[2.6] items-center">
              <ul className=" md:w-[8vw] md:h-[7.5vh] w-[30vw] h-[6.5vh] flex items-center justify-center bg-gray-200 rounded-[30px]">
                <p>People</p>
              </ul>
              <p className=" hover:text-yellow-700">products</p>
              <p className=" hover:text-yellow-700">Animals</p>
            </nav>

            <div className=" border-[3px] md:mx-0 mx-8 md:bg-yellow-600 bg-pink-600 rounded-[30px]">
              <img src={baby} alt="" />
            </div>

            <div className=" flex items-center gap-1 text-blue-600">
              <span className="font-sans font-semibold text-2xl ">
                See more samples
              </span>
              <ul>
                <i className="bi bi-arrow-right"></i>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      <div className=" w-full md:h-[95vh] h-[126vh] md:flex md:flex-row flex flex-col md:gap-[2.9cm] gap-[2cm] items-center justify-center">
        <section className=" flex  font-sans  flex-col gap-4">
          <b className=" md:flex hidden font-bold text-4xl text-[#555555]">
            Remove backgrounds 100% <br /> automatically in 5 seconds <br />
            with one click
          </b>

          {/* sm */}
          <b className=" md:hidden flex md:font-extrabold font-bold md:text-3xl text-4xl text-[#555555]">
            Remove <br /> backgrounds 100% <br /> automatically in 5 <br />
            seconds with one <br /> click
          </b>
          <small className=" md:flex hidden font-normal text-[#6a6868] md:text-[2.8vh] text-sm ">
            Thanks to remove.bg's clever AI, you can slash editing time <br /> -
            and have more fun!
          </small>

          {/* sm */}
          <small className=" md:hidden flex md:font-normal font-medium text-[#6a6868] md:text-[2.8vh] font-sans text-[2.2vh] ">
            Thanks to remove.bg's clever AI, you can <br /> slash editing time -
            and have more fun!
          </small>

          <small className=" md:flex hidden font-normal text-[#6a6868] md:text-[2.8vh]">
            No matter if you want to make a background transparent <br /> (PNG),
            add a white background to a photo, extract or <br /> isolate the
            subject, or get the cutout of a photo - you can <br /> do all this
            and more with remove.bg.
          </small>

          {/* sm */}
          <small className=" md:hidden flex md:font-normal font-medium text-[#6a6868] md:text-[2.8vh] text-[2.2vh]">
            No matter if you want to make a <br /> background transparent (PNG),
            add a white <br /> background to a photo, extract or isolate <br />
            the subject, or get the cutout of a photo - <br /> you can do all
            this and more with <br /> remove.bg.
          </small>
        </section>
        {/*  */}

        <section>
          <img src={allPage} alt="" className=" inline md:h-[57vh] h-[35vh]" />
        </section>
      </div>
      {/*  */}

      <section className=" w-full md:h-[125vh] h-[250vh] justify-center items-center flex">
        <div className=" w-full flex flex-col items-center justify-center gap-7">
          <ul className=" font-sans font-bold md:text-[4vw] text-[9vw] text-[#555555]">
            Just Picture It!
          </ul>
          <div className="flex flex-col items-center justify-center gap-7">
            <nav className=" md:flex hidden gap-14 font-sans font-semibold text-[3vh] items-center">
              <ul className=" w-[8vw] h-[7.5vh] flex items-center justify-center bg-gray-200 rounded-[30px]">
                <p>People</p>
              </ul>
              <p className=" hover:text-yellow-700">products</p>
              <p className=" hover:text-yellow-700">Animals</p>
              <p className=" hover:text-yellow-700">Cars</p>
              <p className=" hover:text-yellow-700">Graphics</p>
            </nav>

            {/* sm */}
            <nav className=" md:hidden flex md:gap-14 gap-[5vh] font-sans font-semibold md:text-[3vh] text-[2.6] items-center">
              <ul className=" md:w-[8vw] md:h-[7.5vh] w-[30vw] h-[6.5vh] flex items-center justify-center bg-gray-200 rounded-[30px]">
                <p>People</p>
              </ul>
              <p className=" hover:text-yellow-700">products</p>
              <p className=" hover:text-yellow-700">Animals</p>
            </nav>

            <div className=" font-sans text-[#7b7979] md:flex md:flex-row flex flex-col items-center justify-center gap-6">
              <div>
                <img
                  src={john1}
                  alt=""
                  className=" inline md:w-[21vw] md:h-[63vh] w-[95vw] h-[50vh] md:rounded-2xl"
                />
                <p className="text-center pt-1">Original</p>
              </div>

              <div>
                <img
                  src={johntrans}
                  alt=""
                  className=" inline md:w-[21vw] md:h-[63vh] w-[95vw] h-[50vh] md:rounded-2xl"
                />
                <p className=" text-center pt-1">Transparent background</p>
              </div>

              <div>
                <img
                  src={john3}
                  alt=""
                  className=" inline md:w-[21vw] md:h-[63vh] w-[95vw] h-[50vh] md:rounded-2xl"
                />
                <p className=" text-center pt-1">New Background</p>
              </div>

              <div>
                <img
                  src={john4}
                  alt=""
                  className=" inline md:w-[21vw] md:h-[63vh]  w-[95vw] h-[50vh] md:rounded-2xl"
                />
                <p className=" text-center pt-1">Endless possibilities</p>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </section>
      {/* end */}

      <div className=" md:flex md:flex-row flex  flex-col-reverse w-full md:h-[90vh] h-[105vh] justify-center items-center gap-8 md:gap-12">
        <section>
          <img
            src={developers}
            alt=""
            className=" inline md:h-[40vh] h-[25vh]"
          />
        </section>

        <section className="flex flex-col md:pl-0 pl-2 gap-5">
          <b className=" md:flex hidden font-sans font-bold text-4xl">
            Integrates with your <br /> Software Workflow
          </b>

          {/* sm */}
          <b className=" md:hidden flex font-sans font-bold text-[#282828] text-4xl">
            Integrates with your <br /> Software Workflow
          </b>

          <div className=" flex flex-col md:items-start md:justify-start  gap-8">
            <small className=" md:flex hidden font-sans font-medium text-[#555555] md:text-[2.8vh] text-[2vh]">
              We've built tools and plugins for some of the most popular <br />{' '}
              design programs, eCommerce sites and computer <br /> environments.
              To bring more digital efficiency to your own <br /> workflow, use
              our API!
            </small>

            {/* sm */}
            <small className=" md:hidden flex font-sans font-medium text-[#555555]  text-[2.3vh]">
              We've built tools and plugins for some of <br /> the most popular
              design programs, <br /> eCommerce sites and computer <br />
              environments. To bring more digital <br /> efficiency to your own
              workflow, use our <br /> API!
            </small>

            <span className=" flex flex-col md:gap-4 gap-2">
              <ul className=" flex text-blue-600 font-sans font-semibold md:text-[2.9vh] text-[2.7vh]">
                <p>All Plugins & Downloads</p>
                <i className="bi bi-arrow-right"></i>
              </ul>
              <ul className=" flex text-blue-600 font-sans font-semibold md:text-[2.9vh] text-[2.7vh]">
                <p>All Plugins & Downloads</p>
                <i className="bi bi-arrow-right"></i>
              </ul>
            </span>
          </div>
        </section>
      </div>
      {/*  */}

      <div className=" w-full md:h-[170vh] h-[227vh] flex justify-center items-center">
        <div className=" w-full md:h-[130vh] h-[223vh] bg-[#ffa600]  flex flex-col items-center justify-center gap-8">
          <section className=" md:flex hidden font-sans font-semibold md:text-5xl text-3xl text-[#252424]">
            <b>They love us. You will too.</b>
          </section>

          {/* sm */}
          <section className=" md:hidden flex text-center font-sans font-medium md:text-5xl text-4xl text-[#252424]">
            <b>
              They love us. You <br /> will too.
            </b>
          </section>

          <section className=" md:flex md:flex-row flex flex-col  items-center gap-6">
            {/* first-div */}
            <div className=" flex flex-col md:pl-10 pl-6 md:gap-8 gap-[1.5cm]  justify-center md:w-[28.5vw] md:h-[85vh] w-[90vw] h-[60vh] rounded-3xl bg-white border-[3px]">
              <ul>
                <img src={sony} alt="" className=" inline md:h-[6vh] h-[8vw]" />
              </ul>

              <div className=" flex flex-col md:gap-[2.7cm] gap-[9vh]">
                <small className=" font-sans font-semibold text-wrap md:text-[3.5vh] text-xl ">
                  “We are impressed by the AI and <br /> think it's the best
                  choice on the <br /> market.”
                </small>
                <div className=" flex flex-col gap-1">
                  <ul>
                    <img
                      src={authorOne}
                      alt=""
                      className=" rounded-[50%] md:w-[7vw] md:h-[7vw] w-[20vw] h-[20vw] inline "
                    />
                  </ul>
                  <span className=" flex flex-col font-sans">
                    <b className=" font-semibold md:text-[2.9vh] text-[2.6vh] text-[#2f2f2f]">
                      Emil Barsø Rheinlænder
                    </b>
                    <small className=" md:flex hidden font-normal md:text-[2.8vh] text-[2.4vh]  text-[#555551]">
                      Content & Marketing Coordinator
                    </small>

                    {/* sm */}
                    <small className=" md:hidden flex font-semibold font-sans text-[2.5vh]  text-[#555551]">
                      Content & Marketing <br /> Coordinator
                    </small>
                  </span>
                </div>
              </div>
              {/*  */}
            </div>

            {/* second-div */}
            <div className=" flex flex-col md:pl-10 pl-6 md:gap-8 gap-[1.5cm]  justify-center md:w-[28.5vw] md:h-[85vh] w-[90vw] h-[60vh] rounded-3xl bg-white border-[3px]">
              <ul>
                <img
                  src={phoenix}
                  alt=""
                  className=" inline md:h-[9vh] h-[8vw]"
                />
              </ul>

              <div className=" flex flex-col gap-[1.7cm]">
                <small className=" font-sans font-semibold text-wrap md:text-[3.5vh] text-xl ">
                  “remove.bg is leaps and bounds <br /> ahead of the
                  competition. A <br />
                  thousand times better. It <br /> simplified the whole
                  process.”
                </small>
                <div className=" flex flex-col gap-1">
                  <ul>
                    <img
                      src={authorTwo}
                      alt=""
                      className=" rounded-[50%] md:w-[7vw] md:h-[7vw] w-[20vw] h-[20vw] inline "
                    />
                  </ul>
                  <span className=" flex flex-col font-sans">
                    <b className=" font-semibold md:text-[2.9vh] text-[2.6vh] text-[#555555]">
                      Marc Cohen
                    </b>
                    <small className=" font-normal md:text-[2.8vh] text-[2.4vh]  text-[#555551]">
                      CEO
                    </small>
                  </span>
                </div>
              </div>
              {/*  */}
            </div>

            {/* third-div */}
            <div className=" flex flex-col md:pl-10 pl-6 md:gap-8 gap-[1.5cm]  justify-center md:w-[28.5vw] md:h-[85vh] w-[90vw] h-[60vh] rounded-3xl bg-white border-[3px]">
              <ul>
                <img
                  src={tech}
                  alt=""
                  className=" inline md:h-[3.5vh] h-[8vw] "
                />
              </ul>

              <div className=" flex flex-col md:gap-[1cm] gap-[1.5cm]">
                <small className=" font-sans font-semibold text-wrap md:text-[3.5vh] text-[2.5vh] ">
                  “We were impressed by its <br /> ability to account for pesky,
                  <br />
                  feathery hair without making an <br /> image look jagged and
                  amateurish.”
                </small>
                <div className=" flex flex-col gap-1">
                  <ul>
                    <img
                      src={authorThree}
                      alt=""
                      className=" rounded-[50%] md:w-[7vw] md:h-[7vw] w-[20vw] h-[20vw] inline "
                    />
                  </ul>
                  <span className=" flex flex-col font-sans">
                    <b className=" font-semibold md:text-[2.9vh] text-[2.6vh] text-[#555555]">
                      Taylor Hatmaker
                    </b>
                    <small className=" font-normal md:text-[2.8vh] text-[2.4vh]  text-[#555551]">
                      Senior Technology Editor
                    </small>
                  </span>
                </div>
              </div>
              {/*  */}
            </div>
          </section>

          <section>
            <ul className=" font-sans font-semibold text-[3.6vh] text-[#242424]">
              <span>Read Success Stories</span>
              <i className="bi bi-arrow-right"></i>
            </ul>
          </section>
        </div>
      </div>

      <div className=" w-full md:h-[20vh] h-[50vh] font-sans flex flex-col gap-5 justify-center items-center">
        <b className=" md:flex hidden font-extrabold text-[#2f2f2f] text-[3.8vw]">
          Ramp up the creativity - and efficiency!
        </b>
        {/* sm */}
        <b className=" md:hidden flex font-bold text-center font-sans text-[#474747] text-4xl">
          Ramp up the <br /> creativity - and <br /> efficiency!
        </b>

        <span className=" md:flex hidden font-medium md:text-[1.3vw]  text-[#545454] text-center">
          Whether you want to make a mind-blowing greetings card for your bestie
          or to power through <br /> thousands of car photos in next to no time,
          remove.bg makes it happen.
        </span>

        {/* sm */}
        <span className="  md:hidden flex font-medium md:text-[1.3vw]  text-[#8f8e8e] text-center">
          Whether you want to make a mind-blowing <br /> greetings card for your
          bestie or to power <br /> through thousands of car photos in next to{' '}
          <br />
          no time, remove.bg makes it happen.
        </span>
      </div>

      <div className=" w-full md:h-[125vh] h-[205vh] flex justify-center items-center ">
        <div className=" w-full md:h-[70vh] h-[175vh] bg-slate-100">
          <div className=" w-full  flex flex-col text-[#545454] relative bottom-[2.2cm] items-center justify-center gap-6">
            <section className=" md:flex md:flex-row flex flex-col gap-6">
              <div className=" md:w-[22vw] md:h-[21vh] w-[85vw] h-[17vh] flex flex-col pl-8 justify-center md:border-[3px] md:border-gray-300 border-[2px] border-gray-200  rounded-2xl bg-white hover:border-[3px] hover:border-[#87ebd5] hover:relative hover:bottom-2 ">
                <i className="bi bi-brush md:text-2xl text-2xl"></i>
                <ul className=" flex items-center">
                  <b className="font-sans font-semibold md:text-[1.5vw] text-[6vw]">
                    Magic Brush
                  </b>
                  <i className="bi bi-arrow-right-short text-2xl"></i>
                </ul>
              </div>
              <div className=" md:w-[22vw] md:h-[21vh] w-[85vw] h-[17vh] flex flex-col pl-8 justify-center md:border-[3px] md:border-gray-300 border-[2px] border-gray-200 rounded-2xl bg-white hover:border-[3px] hover:border-[#87ebd5] hover:relative hover:bottom-2 ">
                <i className="bi bi-heart-pulse text-2xl"></i>
                <ul className=" flex items-center">
                  <b className="font-sans font-semibold md:text-[1.5vw] text-[6vw] ">
                    for Individuals
                  </b>
                  <i className="bi bi-arrow-right-short text-2xl"></i>
                </ul>
              </div>
              <div className=" md:w-[22vw] md:h-[21vh] w-[85vw] h-[17vh] flex flex-col pl-8 justify-center md:border-[3px] md:border-gray-300 border-[2px] border-gray-200  rounded-2xl bg-white hover:border-[3px] hover:border-[#87ebd5] hover:relative hover:bottom-2 ">
                <i className="bi bi-camera text-2xl"></i>
                <ul className=" flex items-center">
                  <b className="font-sans font-semibold md:text-[1.5vw] text-[6vw]">
                    for Photographers
                  </b>
                  <i className="bi bi-arrow-right-short text-2xl"></i>
                </ul>
              </div>
            </section>

            <section className=" md:flex md:flex-row flex flex-col gap-6">
              <div className=" md:w-[22vw] md:h-[21vh] w-[85vw] h-[17vh] flex flex-col pl-8 justify-center md:border-[3px] md:border-gray-300 border-[2px] border-gray-200  rounded-2xl bg-white hover:border-[3px] hover:border-[#87ebd5] hover:relative hover:bottom-2 ">
                <i className="bi bi-chat text-2xl"></i>
                <ul className=" flex items-center">
                  <b className="font-sans font-semibold md:text-[1.5vw] text-[6vw]">
                    for Marketing
                  </b>
                  <i className="bi bi-arrow-right-short text-2xl"></i>
                </ul>
              </div>
              <div className=" md:w-[22vw] md:h-[21vh] w-[85vw] h-[17vh] flex flex-col pl-8 justify-center md:border-[3px] md:border-gray-300 border-[2px] border-gray-200  rounded-2xl bg-white hover:border-[3px] hover:border-[#87ebd5] hover:relative hover:bottom-2 ">
                <ul className=" flex items-center">
                  <i className="bi bi-chevron-left"></i>
                  <p className=" md:text-[1.5vw] text-[6vw]">/</p>
                  <i className="bi bi-chevron-right"></i>
                </ul>
                {/*  */}
                <ul className=" flex items-center">
                  <b className="font-sans font-semibold md:text-[1.5vw] text-[6vw]">
                    for Developers
                  </b>
                  <i className="bi bi-arrow-right-short text-2xl"></i>
                </ul>
              </div>
              <div className=" md:w-[22vw] md:h-[21vh] w-[85vw] h-[17vh] flex flex-col pl-8 justify-center md:border-[3px] md:border-gray-300 border-[2px] border-gray-200  rounded-2xl bg-white hover:border-[3px] hover:border-[#87ebd5] hover:relative hover:bottom-2 ">
                <i className="bi bi-gift text-2xl"></i>
                <ul className=" flex items-center">
                  <b className="font-sans font-semibold md:text-[1.5vw] text-[6vw]">
                    for Ecommerce
                  </b>
                  <i className="bi bi-arrow-right-short text-2xl"></i>
                </ul>
              </div>
            </section>

            <section className="md:flex md:flex-row flex flex-col gap-6">
              <div className=" md:w-[22vw] md:h-[21vh] w-[85vw] h-[17vh] flex flex-col pl-8 justify-center md:border-[3px] md:border-gray-300 border-[2px] border-gray-200  rounded-2xl bg-white hover:border-[3px] hover:border-[#87ebd5] hover:relative hover:bottom-2 ">
                <i className="bi bi-display text-2xl"></i>
                <ul className=" flex items-center">
                  <b className="font-sans font-semibold md:text-[1.5vw] text-[6vw]">
                    for Media
                  </b>
                  <i className="bi bi-arrow-right-short text-2xl"></i>
                </ul>
              </div>
              <div className=" md:w-[22vw] md:h-[21vh] w-[85vw] h-[17vh] flex flex-col pl-8 justify-center md:border-[3px] md:border-gray-300 border-[2px] border-gray-200  rounded-2xl bg-white hover:border-[3px] hover:border-[#87ebd5] hover:relative hover:bottom-2 ">
                <i className="bi bi-car-front text-2xl"></i>
                <ul className=" flex items-center">
                  <b className="font-sans font-semibold md:text-[1.5vw] text-[6vw]">
                    for Car Dealerships
                  </b>
                  <i className="bi bi-arrow-right-short text-2xl"></i>
                </ul>
              </div>
              <div className=" md:w-[22vw] md:h-[21vh] w-[85vw] h-[17vh] flex flex-col pl-8 justify-center md:border-[3px] md:border-gray-300 border-[2px] border-gray-200  rounded-2xl bg-white hover:border-[3px] hover:border-[#87ebd5] hover:relative hover:bottom-2 ">
                <i className="bi bi-buildings text-2xl"></i>
                <ul className=" flex items-center">
                  <b className="font-sans font-semibold md:text-[1.5vw] text-[6vw]">
                    for Enterprise
                  </b>
                  <i className="bi bi-arrow-right-short text-2xl"></i>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/*  */}

      <div className=" w-full md:h-[110vh] h-[48vh] flex flex-col gap-16 mb-[4cm] justify-center items-center  ">
        <ul className=" flex flex-col text-center items-center justify-center font-sans md:gap-6 gap-3">
          <b className=" md:flex hidden font-bold text-[#555555] md:text-[4vw] text-4xl">
            Remove Image Background
          </b>
          {/* sm */}
          <b className=" md:hidden flex font-bold text-[#555555] md:text-[4vw] text-4xl">
            Remove Image <br /> Background
          </b>

          <small className=" font-normal md:text-lg text-base text-[#898989]">
            Get a transparent background for any image.
          </small>
        </ul>

        <div className=" flex flex-col  gap-7">
          <section className=" md:w-[32vw] md:h-[58vh] h-[5vh] flex justify-center items-center md:bg-[#fff] bg-transparent  rounded-none  md:rounded-[30px] md:shadow-2xl">
            <div className=" flex flex-col items-center justify-center gap-7">
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className=" hidden"
                />
                <button
                  className=" md:w-[16vw] md:h-[9.8vh] w-[89vw] h-[7.5vh] md:mb-0 mb-11 rounded-full text-white bg-blue-700 text-2xl font-sans font-semibold "
                  onClick={handleButtonClick}
                >
                  Upload Image
                </button>
                {image && (
                  <button
                    className=" w-[12vw] h-[9vh] bg-slate-950 hover:bg-slate-900 text-white font-sans font-semibold rounded-md ml-4"
                    onClick={handleSubmit}
                  >
                    Remove Background
                  </button>
                )}
              </div>

              <div className="  md:flex hidden flex-col gap-1 text-center text-[#555555]">
                <b className=" font-sans font-bold text-[3.5vh]">
                  or drop a file,
                </b>
                <small>paste image or URL</small>
              </div>
            </div>
          </section>
          <section className=" flex flex-col gap-4">
            <ul className=" md:flex md:flex-row flex flex-col items-center md:gap-5 gap-3">
              <p className=" md:block hidden font-sans font-bold text-[#555555] ">
                No image? <br /> Try one of these:
              </p>
              <p className=" md:hidden font-sans font-bold text-[#555555] ">
                No image? Try one of these:
              </p>
              <div className=" flex gap-3  items-center">
                <img
                  src={manone}
                  alt=""
                  className=" inline md:h-[11vh] h-[7vh] rounded-lg"
                />
                <img
                  src={lion}
                  alt=""
                  className=" md:h-[11vh] h-[7vh] rounded-lg"
                />
                <img
                  src={car}
                  alt=""
                  className=" md:h-[11vh] h-[7vh] rounded-lg"
                />
                <img
                  src={room}
                  alt=""
                  className=" md:h-[11vh] h-[7vh] rounded-lg"
                />
              </div>
            </ul>
            {/*  */}
            <span className=" md:block hidden font-sans font-medium text-[#555555] md:text-[0.8vw]">
              By uploading an image or URL you agree to our Terms of Service. To
              learn more about how <br /> remove.bg handles your personal data,
              check our Privacy Policy.
            </span>
            <span className=" md:hidden block font-sans font-medium text-[#555555] md:text-[0.8vw] text-center text-[1.4vh]">
              By uploading an image or URL you agree to our Terms of Service. To
              <br />
              learn more about how remove.bg handles your personal data, check{' '}
              <br /> our Privacy Policy.
            </span>
          </section>
        </div>
      </div>
      {/*  */}

      <section className=" w-full md:h-[130vh] h-[100vh] flex justify-center items-center">
        <div
          style={{ backgroundImage: 'url(src/assets/back-yellow.jpg)' }}
          className=" bg-cover w-full md:h-[112vh] h-[130vh] gap-14 flex flex-col items-center justify-center "
        >
          <section className="w-full flex flex-col items-center justify-center gap-6">
            <div className=" w-[72vw] flex items-center justify-between font-sans ">
              <b className=" font-bold text-[2.6vw] text-[#3e3d3d] ">Blog</b>
              <ul className=" flex items-center gap-2 text-[#3e3d3d]">
                <p className=" font-medium text-[1.6vw]">See more articles</p>
                <i className="bi bi-arrow-right"></i>
              </ul>
            </div>

            <div className="w-[72vw] items-center justify-center md:flex md:flex-row flex flex-col gap-6">
              <section className=" flex flex-col text-[#555555] gap-5 justify-center pl-9 md:w-[23vw] md:h-[32vh] w-[85vw] h-[22vh] bg-white rounded-2xl border-[3px] hover:relative hover:bottom-1">
                <span className=" font-sans font-normal text-lg">
                  Jun 14, 2024
                </span>
                <b className=" font-sans font-medium text-lg ">
                  How to Remove the <br /> Background from your <br /> Signature
                </b>
              </section>

              <section className=" flex flex-col text-[#555555] gap-5 justify-center pl-9 md:w-[23vw] md:h-[32vh] w-[85vw] h-[22vh] bg-white rounded-2xl border-[3px] hover:relative hover:bottom-1">
                <span className=" font-sans font-normal text-lg">
                  Apr 30, 2024
                </span>
                <b className=" font-sans font-medium text-lg ">
                  Creative ways of using <br /> background removal in your
                  <br />
                  day-to-day
                </b>
              </section>

              <section className=" flex flex-col text-[#555555] gap-5 justify-center pl-9 md:w-[23vw] md:h-[32vh] w-[85vw] h-[22vh] bg-white rounded-2xl border-[3px] hover:relative hover:bottom-1">
                <span className=" font-sans font-normal text-lg">
                  Apr 22, 2024
                </span>
                <b className=" font-sans font-medium text-lg ">
                  Professional Background <br /> Remover: What to Look Out
                  <br /> For
                </b>
              </section>
            </div>
          </section>

          <section className=" w-[72vw] flex items-center justify-between">
            <div className=" flex flex-col gap-8">
              <b className=" font-sans font-bold text-4xl text-[#3e3d3d]">
                Get Updates
              </b>
              <span className=" font-sans font-normal text-[1.3vw] text-pretty text-[#505050]">
                Sign up for our mailing list to receive news and updates <br />
                about remove.bg products and services. You can <br />
                unsubscribe at any time.
              </span>
            </div>

            <div className=" h-[27vh] justify-end flex flex-col items-center gap-2">
              <div className=" flex items-center justify-between w-[35vw] h-[10vh] border-[1px] border-[gray] hover:border-[1px] hover:border-[black] bg-white rounded-[50px]">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className=" pl-8 w-[24vw]  outline-none bg-transparent font-medium text-lg"
                />
                {/*  */}
                <button className=" w-[10.5vw] h-[8vh] mr-1 font-sans font-semibold text-xl text-white bg-blue-700 rounded-[50px] border-none ">
                  Subscribe
                </button>
              </div>

              <span className=" font-sans font-medium text-[11px] text-[#545454] ">
                To learn more about how remove.bg handles your personal data,
                check our Privacy Policy.
              </span>
            </div>
          </section>
        </div>
      </section>

      <section className=" flex items-center justify-center gap-6 w-full h-[25vh]">
        <span className=" border-[1px] border-slate-300 w-[42vw] "></span>
        <div className=" w-[20vw] h-[18vh] gap-2 cursor-pointer flex flex-col items-center rounded-xl  border-[1px] border-gray-300">
          <p className=" flex items-center gap-2 mt-1">
            <span className=" rounded-[50%] bg-slate-700 w-[1.5vw] font-sans text-sm h-[1.5vw] text-white flex justify-center items-center pb-1 ">
              p
            </span>
            <span className=" font-sans font-medium text-[1vw] text-slate-700">
              PRODUCT HUNT
            </span>
          </p>
          <ul className=" flex flex-col items-center ">
            <div className=" flex items-center text-[2vw] text-slate-700 gap-3">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <small className=" font-sans font-normal text-slate-700">
              (4.7) based on 724 reviews
            </small>
          </ul>
        </div>
        <span className=" border-[1px] border-slate-300 w-[42vw] "></span>
      </section>
      {/*  */}

      <div className=" w-full h-[90vh] flex items-center justify-center ">
        <div className=" w-full font-sans  flex items-start justify-start pl-16  gap-[4.5cm]">
          {/* 1 */}
          <section className=" font-sans  cursor-pointer  flex flex-col gap-3">
            <b className=" font-semibold text-slate-700">Learn more</b>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Magic Brush
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Individuals
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Photographers
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Marketing
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Developers
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Ecommerce
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Media
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Car Dealerships
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Enterprise
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Success stories
            </p>
          </section>

          {/* 2 */}
          <section className=" font-sans  cursor-pointer flex flex-col gap-3">
            <b className=" font-semibold text-slate-700">Tools & API</b>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              API Documentation
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Integrations, tools & apps
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Photoshop Extension
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Windows / Mac / Linux
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Android App
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Design Templates
            </p>
          </section>

          {/* 3 */}
          <section className=" font-sans  cursor-pointer flex flex-col gap-3">
            <b className=" font-semibold text-slate-700">Support</b>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Help & FAQs
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Contact us
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Refunds
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Platform Status
            </p>
          </section>

          {/* 4 */}
          <section className=" font-sans  cursor-pointer flex flex-col gap-3">
            <b className=" font-semibold text-slate-700">Company</b>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Blog
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Affiliate Program
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Create automatic designs
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Video Background Removal
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Careers
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              About us
            </p>
            <p className="text-slate-500 font-normal hover:text-yellow-700">
              Press
            </p>
          </section>
        </div>
      </div>
      {/*  */}

      <div className=" w-full h-[50vh] bg-slate-600 flex flex-col gap-16 items-center justify-center ">
        <section className=" w-full flex items-center justify-between px-20 ">
          <ul className=" flex items-center gap-2 w-[10vw] cursor-pointer justify-center h-[7vh]  font-sans font-semibold text-[#383838] rounded-[30px] bg-gray-200">
            <i className="bi bi-globe text-xl"></i>
            <p className=" text-[1.3vw]">English</p>
          </ul>

          <div className=" flex gap-3 items-center cursor-pointer">
            <span className=" flex items-center justify-center w-[3.3vw] h-[3.3vw] bg-gray-200 rounded-full">
              <i className="bi bi-facebook text-lg text-[#555555]"></i>
            </span>
            <span className=" flex items-center justify-center w-[3.3vw] h-[3.3vw] bg-gray-200 rounded-full">
              <i className="bi bi-instagram text-lg text-[#555555]"></i>
            </span>
            <span className=" flex items-center justify-center w-[3.3vw] h-[3.3vw] bg-gray-200 rounded-full">
              <i className="bi bi-twitter text-lg text-[#555555]"></i>
            </span>
            <span className=" flex items-center justify-center w-[3.3vw] h-[3.3vw] bg-gray-200 rounded-full">
              <i className="bi bi-tiktok text-lg text-[#555555]"></i>
            </span>
            <span className=" flex items-center justify-center w-[3.3vw] h-[3.3vw] bg-gray-200 rounded-full">
              <i className="bi bi-youtube text-lg text-[#555555]"></i>
            </span>
            <span className=" flex items-center justify-center w-[3.3vw] h-[3.3vw] bg-gray-200 rounded-full">
              <i className="bi bi-linkedin text-lg text-[#555555]"></i>
            </span>
          </div>
        </section>

        <section className=" w-full flex items-center justify-between px-20 ">
          <span className=" text-gray-200 font-sans font-medium text-sm">
            © remove.bg, a Canva Austria GmbH brand
          </span>
          <span className=" flex items-center gap-7 font-sans font-medium text-sm text-gray-200">
            <a href="/">Terms of Service</a>
            <a href="/">General Terms and Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Cookie Policy</a>
            <a href="/">Imprint</a>
          </span>
        </section>
      </div>
    </main>
  )
}

export default Main
