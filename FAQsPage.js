import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import GeneralFAQ from "./GeneralFAQ";
import ServicesFAQs from "./ServicesFAQs";
import FakerFAQs from "./FakerFAQs";
import DataRelationFAQs from "./DataRelationFAQs";
import SeederFAQs from "./SeederFAQs";
import GenFAQs from "./GenFAQs";

const FAQDashboard = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-column">
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                {/* Add more TabPanels for other FAQ sections */}
                
                <TabPanel header="General FAQs"><GeneralFAQ /></TabPanel>
                <TabPanel header="Services "><ServicesFAQs/></TabPanel>
                <TabPanel header="Data Relation "><DataRelationFAQs/></TabPanel>
                <TabPanel header="Seeder"><SeederFAQs/></TabPanel>
                <TabPanel header="Faker "><FakerFAQs/></TabPanel>
                <TabPanel header="Generate code"><GenFAQs/></TabPanel>
            </TabView>
        </div>
    );
};

export default FAQDashboard;
