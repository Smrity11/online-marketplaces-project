

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
        <div className="my-36">
              <div>
       <p className="text-3xl font-bold text-center my-24">Web Development Tools</p>
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
       <div  className="grid grid-cols-1 md:grid-cols-2 gap-24 justify-center items-center my-10 lg:px-7">
        <div className="space-y-4">
            <p> <span className="text-blue-950 font-bold text-[23px] "> Visual Studio Code : </span>A lightweight and powerful code editor with support for various programming languages and extensions.</p>
            <p><span className="text-blue-950 font-bold text-[23px] ">Sublime Text : </span>A sophisticated text editor for code, markup, and prose with advanced features and customization options.</p>
            <p><span className="text-blue-950 font-bold text-[23px] ">Atom : </span>An open-source text editor developed by GitHub, known for its hackability and extensibility.</p>
            <p><span className="text-blue-950 font-bold text-[23px] ">Git : </span>A distributed version control system for tracking changes in source code during software development.</p>
        </div>
        <div className="space-y-4">
        <p><span className="text-blue-950 font-bold text-[23px] ">GitHub : </span>A web-based platform for version control and collaboration using Git, widely used for hosting and reviewing code.</p>
            <p><span className="text-blue-950 font-bold text-[23px] ">Node.js : </span>A JavaScript runtime built on Chromes V8 JavaScript engine, used for building scalable and efficient web applications.</p>
            <p><span className="text-blue-950 font-bold text-[23px] ">React.js : </span>A JavaScript library for building user interfaces, particularly single-page applications, developed by Facebook.</p>
            <p><span className="text-blue-950 font-bold text-[23px] ">Angular : </span>A popular web application framework developed by Google for building dynamic, client-side web applications.</p>
        </div>
       </div>
        </div>
    );
};

export default WebTool;