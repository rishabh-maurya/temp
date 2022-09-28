import Accordion from 'react-bootstrap/Accordion';
import './AccordionComponent.scss';

const AccordionComponent = ({ faqs }) => {
    return (
        <Accordion defaultActiveKey="0">
            {
                faqs.map((faq, index) =>
                    <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{faq.que}</Accordion.Header>
                        <Accordion.Body>{faq.ans}</Accordion.Body>
                    </Accordion.Item>
                )
            }
        </Accordion>
    );
}

export default AccordionComponent;