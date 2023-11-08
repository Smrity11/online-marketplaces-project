

const GraphicsTool = () => {

    const graphics =[
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png?20200616073617",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/512px-Adobe_InDesign_CC_icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/600px-Canva_icon_2021.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/394px-Sketch_Logo.svg.png?20230303045010",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/400px-Figma-logo.svg.png",
        "https://w7.pngwing.com/pngs/876/879/png-transparent-coreldraw-keygen-computer-software-graphics-editor-others-cdr-balloon-logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Gravit_Designer_Logo.svg/512px-Gravit_Designer_Logo.svg.png?20200806045327"
    ]
    return (
        <div className="my-36">
              <div>
       <p className="text-3xl font-bold text-center my-24">Graphics Design Tools</p>
         <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center  px-6 md:px-10 lg:px-28 gap-11">
            {
                graphics.map((image, index) => <div key={index} className="bg-white shadow-2xl h-[150px] w-[150px] grid items-center justify-center">
                    <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={image} />
  </div>
</div>
                </div>)
            }
        </div>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-24 justify-center items-center my-10 lg:px-7">
              <div className="space-y-4">
              <p><span className="text-blue-950 font-bold text-[23px] "> Adobe Photoshop : </span>A powerful raster graphics editor used for photo editing, digital painting, and graphic design.</p>
                <p><span className="text-blue-950 font-bold text-[23px] ">Adobe Illustrator : </span> Vector graphics editor used for creating logos, icons, typography, and complex illustrations.</p>
                <p><span className="text-blue-950 font-bold text-[23px] ">Adobe InDesign : </span>Desktop publishing software for creating print and digital designs, such as brochures, magazines, and eBooks.</p>
                <p> <span className="text-blue-950 font-bold text-[23px] ">Canva : </span> A web-based design tool with customizable templates for social media graphics, presentations, posters, and more.</p>
              </div>
              <div className="space-y-4">
              <p><span className="text-blue-950 font-bold text-[23px] ">Sketch : </span> A vector-based design tool for macOS, primarily used for user interface and experience design (UI/UX).</p>
                <p><span className="text-blue-950 font-bold text-[23px] ">Figma : </span> A cloud-based design tool that allows real-time collaboration on UI/UX design, prototyping, and wireframing.</p>
                <p> <span className="text-blue-950 font-bold text-[23px] ">CorelDRAW : </span>Vector graphics editor used for illustrations, page layouts, photo editing, and typography.</p>
                <p><span className="text-blue-950 font-bold text-[23px] ">Gravit Designer : </span> A free vector design tool that works both online and offline, suitable for various design projects.</p>
              </div>
              </div>
        </div>
    );
};

export default GraphicsTool;