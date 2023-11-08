import DigitalTool from "./DigitalTool";
import GraphicsTool from "./GraphicsTool";
import WebTool from "./WebTool";

const ToolsSection = () => {

    return (
     <div className="my-20">
        <DigitalTool></DigitalTool>
     <WebTool></WebTool>
     <GraphicsTool></GraphicsTool>
     </div>
    );
};

export default ToolsSection;