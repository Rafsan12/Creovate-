import BGVIDEO from "../../assets/4572-179384394_medium.mp4";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={BGVIDEO} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Content */}
      <div className="relative z-10 text-center text-black p-4 top-32 md:top-52">
        <h1 className="text-xl md:text-4xl font-semibold mb-4">
          Unleash your creativity with stunning designs.
        </h1>
        <p className="text-lg">Transform your ideas with seamless templates.</p>
        <button className="btn btn-warning">Explore Our Work</button>
      </div>
    </div>
  );
}
