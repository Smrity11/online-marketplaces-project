import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WevDevelopment from './WevDevelopment';
import DegitalMarketing from './DegitalMarketing';
import GraphicsDesign from './GraphicsDesign';



const CategoryTab = () => {
    return (
        <div className='md:px-8 my-10'>
        <p className='text-center font-bold text-3xl my-14'>Our Job Category</p>
    
             <Tabs>
    <TabList className="flex text-center text-2xl bg-blue-950 text-white h-[70px] md:h-[50px]">
      <Tab className="w-1/3 cursor-pointer font-bold border-2">Web Development</Tab>
      <Tab className="w-1/3 cursor-pointer font-bold border-2 border-l-2"> Digital Marketing</Tab>
      <Tab className="w-1/3 cursor-pointer font-bold border-2"> Graphics Design.</Tab>
    </TabList>

   <div className='px-8  my-10'>
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
