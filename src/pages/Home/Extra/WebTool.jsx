

const WebTool = () => {
    
    const webImg = [
        "https://logowik.com/content/uploads/images/visual-studio-code7642.jpg"
        ,"https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Atom_editor_logo_black.svg/1118px-Atom_editor_logo_black.svg.png",
        "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" ,
        "https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png",
        "https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png"
    ]


    return (
        <div>
              <div>
       <p className="text-3xl font-bold text-center my-10">digital marketing tools</p>
         <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center  px-6 md:px-10 lg:px-28 gap-11">
            {
                webImg.map((image, index) => <div key={index} className="bg-white shadow-2xl h-[150px] w-[150px] grid items-center justify-center">
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

export default WebTool;