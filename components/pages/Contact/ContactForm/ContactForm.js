import React, {useState} from "react";
import {Form, FormGroup, Input} from 'reactstrap';
import Button from "../../../shared/Button/Button";
import axios from "axios";
import {withTranslation} from "../../../../i18n";

const ContactForm = ({t}) => {
const [values, setValues] = useState({name: '', mail: '', subject: '', message:''})
const [alertStatus, setAlertStatus] = useState(false)

const handleInputChange = e => {
    const {name, value} = e.target

    setValues({...values, [name]: value})
}

const sendForm = () => {
    const sendMailObject = {
        toEmail: undefined,
        mailBody: undefined
      };

    sendMailObject.toEmail = "ergidatarim@hotmail.com"

    sendMailObject.mailBody = `
    <b>Ad:</b> ${values.name} <br>
    <b>E-Mail:</b> ${values.mail} <br>
    <b>Konu:</b> ${values.subject} <br>
    <b>Mesaj:</b> ${values.message}
    `

    axios.post('https://mailer.sehatekgis.com/contact', sendMailObject).then(() => {
        console.log("sended");
        setValues({name: '', mail: '', subject: '', message:''})
        setAlertStatus(true)
    })
}

    return (
        <div className="container mt-5">
            <Form>
                <FormGroup className="row">
                    <div className="col-12 col-md-4 mt-3">
                        <Input className="er-bg-gray" placeholder={t('formAd')} name='name' onChange={handleInputChange} value={values.name}/>
                    </div>
                    <div className="col-12 col-md-4 mt-3">
                        <Input className="er-bg-gray" placeholder="E-MAIL" name='mail' onChange={handleInputChange} value={values.mail}/>
                    </div>
                    <div className="col-12 col-md-4 mt-3">
                        <Input className="er-bg-gray" placeholder={t('formSubject')} name='subject' onChange={handleInputChange} value={values.subject}/>
                    </div>
                    <div className="col-sm-12 mt-3">
                        <Input className="er-bg-gray" type="textarea" id="exampleText" placeholder={t('formMessage')}
                               style={{height: '150px'}} name='message' onChange={handleInputChange} value={values.message}/>
                    </div>
                    {alertStatus ? (<div className="col-sm-12 mt-3">
                        <div class="alert alert-success" role="alert">
                            Mesajınız başarıyla iletilmiştir.
                        </div>
                    </div>) : null}
                </FormGroup>

                <div className="d-flex mb-3 justify-content-center">
                    <button onClick={sendForm} type="button" className="btn btn-success px-4 rounded button-green align-self-baseline">GÖNDER</button>
                </div>
            </Form>
        </div>
    )
};

export default withTranslation('contact')(ContactForm);
