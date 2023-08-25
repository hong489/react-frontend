import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Accordion, AccordionTab } from "primereact/accordion";
import faqs from "./seeder-faqs.json"; // Adjust the path
import { Link } from "react-router-dom";

const SeederFAQs = (props) => {
    //     // Similar to FAQsPage, read from the JSON and create Accordion items
    const [accordionItems, setAccordionItems] = useState([]);

    useEffect(() => {
        // Transform the external JSON FAQs data into Accordion items format
        const accordionItems = faqs.map((faq, index) => ({
            header: faq.q,
            content: <p key={index}>{faq.a}</p>,
        }));
        setAccordionItems(accordionItems);
    }, []); 

    return (
        <div className="flex flex-column align-items-center overflow-hidden">
            <div style={{ height: "100px" }} />

            <div className="col-10">
                <Accordion multiple activeIndex={[]}>{accordionItems.map((item, index) => <AccordionTab key={index} header={item.header}>{item.content}</AccordionTab>)}</Accordion>
            </div>
            <Link to="/faq/dashboard" className="btn btn-primary mb-3">Back to Top</Link>
            <div style={{ height: "300px" }} />
        </div>
    );
};
const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(SeederFAQs);