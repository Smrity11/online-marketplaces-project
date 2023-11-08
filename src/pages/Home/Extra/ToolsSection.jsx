import DigitalTool from "./DigitalTool";
import GraphicsTool from "./GraphicsTool";
import WebTool from "./WebTool";

const ToolsSection = () => {

    return (
     <div className="my-20 px-6 md:px-10 lg:px-28">
        <DigitalTool></DigitalTool>
     <WebTool></WebTool>
     <GraphicsTool></GraphicsTool>
     </div>
    );
};

export default ToolsSection;