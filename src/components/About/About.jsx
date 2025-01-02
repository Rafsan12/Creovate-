import BGVIDEO from "../../assets/4572-179384394_medium.mp4";
export default function About() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row w-full gap-14 ">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 lg:h-96">
            <video autoPlay loop muted>
              <source src={BGVIDEO} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-center text-3xl font-semibold mb-4">
              About us!
            </h1>
            <p className="text-xl font-semibold text-center">
              We are your one-stop solution for professional designs, dynamic
              website templates, and high-quality videos. <br />
              Crafted for creators, developers, and businesses, <br />
              our tools empower you to innovate without limits.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
