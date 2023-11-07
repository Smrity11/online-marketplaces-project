
const Banner = () => {
    return (
        <div className="">
        
        <div className="">
        <div className="carousel w-full h-[450px] ">
        <div id="item1" className="carousel-item w-full relative ">
        <div className="space-y-6 p-8 lg:px-3 absolute text-white md:w-2/5 mt-7 md:ml-6">
<h1 className="text-4xl font-bold ">WEB DEVELOPMENT</h1>
<p className="text-2xl font-semibold">Expert Web Development Solutions for Your Online Success</p>
<p className=" leading-7"> Explore our cutting-edge web development services tailored to meet your unique business needs. Our team of skilled developers combines creativity and technical expertise to create stunning, responsive, and user-friendly websites. Whether you need a simple business site or a complex e-commerce platform, we deliver exceptional results that enhance your online presence and drive growth.</p>
  </div>
          <img src="https://i.ibb.co/vLhcqZM/Unlock-the-power-of-the-Internet-one-pixel-at-a-time-clipdrop-cleanup.jpg" className="w-full" />
        </div> 
        <div id="item2" className="carousel-item w-full relative">
        <div className="space-y-6 p-8 lg:px-3 absolute text-white md:w-2/5 mt-7 md:ml-6 ">
<h1 className="text-4xl font-bold ">DIGITAL MARKETING </h1>
<p className="text-2xl font-semibold">Elevate Your Brand with Strategic Digital Marketing Services</p>
<p className=" leading-7">Unlock the full potential of your business with our comprehensive digital marketing solutions. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media management and content marketing, we craft data-driven strategies to boost your online visibility, engage your audience, and increase conversions. </p>
  </div>
          <img src="https://i.ibb.co/rpk9mQ2/144124962-modern-digital-marketing-vector-illustration-for-web-page-user-rooftop-cityscape-dark-purp.png" className="w-full" />
        </div> 
        <div id="item3" className="carousel-item w-full relative ">
        <div className="space-y-6 p-8 lg:px-3 absolute text-white md:w-2/5 mt-7 md:ml-6">
<h1 className="text-4xl font-bold ">GRAPHICS DESIGN</h1>
<p className="text-2xl font-semibold">Transforming Ideas into Visually Stunning Designs</p>
<p className=" leading-7"> Immerse your audience in captivating visual experiences with our top-notch graphics design services. Our creative team specializes in crafting compelling logos, eye-catching branding materials, engaging social media graphics, and impactful marketing collateral. Whether youre starting a new venture or looking to refresh your brand, we blend creativity and innovation to deliver designs that leave a lasting impression.</p>
  </div>
          <img src="https://i.ibb.co/Mnv9f9w/graphic-designer-courses-clipdrop-remove-text-clipdrop-cleanup.png" className="w-full" />
        </div> 
       
      </div> 
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a> 
       
      </div>
        </div>
      </div>
    );
};

export default Banner;