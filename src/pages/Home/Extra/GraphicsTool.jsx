

const GraphicsTool = () => {

    const graphics =[
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png?20200616073617",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/512px-Adobe_InDesign_CC_icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/600px-Canva_icon_2021.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/394px-Sketch_Logo.svg.png?20230303045010",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/400px-Figma-logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Gravit_Designer_Logo.svg/512px-Gravit_Designer_Logo.svg.png?20200806045327"
    ]
    return (
        <div>
              <div>
       <p className="text-3xl font-bold text-center my-10">digital marketing tools</p>
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
        </div>
    );
};

export default GraphicsTool;