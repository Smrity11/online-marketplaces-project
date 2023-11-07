import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WevDevelopment from './WevDevelopment';
import DegitalMarketing from './DegitalMarketing';
import GraphicsDesign from './GraphicsDesign';



const CategoryTab = () => {
    return (
        <div>
    
             <Tabs>
    <TabList className="flex text-center text-2xl bg-blue-950 text-white h-[70px] md:h-[50px]">
      <Tab className="w-1/3 cursor-pointer font-bold border-r-2">Web Development</Tab>
      <Tab className="w-1/3 cursor-pointer font-bold border-r-2 border-l-2"> Digital Marketing</Tab>
      <Tab className="w-1/3 cursor-pointer font-bold border-l-2"> Graphics Design.</Tab>
    </TabList>

   <div className='px-8 md:px-16 lg:px-20 my-10'>
   <TabPanel>
     <WevDevelopment></WevDevelopment>
    </TabPanel>
    <TabPanel>
   <DegitalMarketing></DegitalMarketing>
    </TabPanel>
    <TabPanel>
      <GraphicsDesign></GraphicsDesign>
    </TabPanel>
   </div>


  </Tabs>
        </div>
    );
};

export default CategoryTab;
