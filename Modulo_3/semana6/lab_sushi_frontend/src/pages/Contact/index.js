import { Contact } from "../../components/Contact";
import { Form } from "../../components/Form";
import './index.css'

export function ContactPage() {
    return(
        <body className="bodyContact">
            <Contact/>
            <Form/>
        </body>
    )
}