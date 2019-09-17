import React from "react";
import {Form, FormGroup, Input} from 'reactstrap';
import Button from "../../../shared/Button/Button";

import {withTranslation} from "../../../../i18n";

const ContactForm = ({t}) => {
    return (
        <div className="container mt-5">
            <Form>
                <FormGroup className="row">
                    <div className="col-12 col-md-4 mt-3">
                        <Input className="er-bg-gray" placeholder={t('formAd')}/>
                    </div>
                    <div className="col-12 col-md-4 mt-3">
                        <Input className="er-bg-gray" placeholder="E-MAIL"/>
                    </div>
                    <div className="col-12 col-md-4 mt-3">
                        <Input className="er-bg-gray" placeholder={t('formSubject')}/>
                    </div>
                    <div className="col-sm-12 mt-3">
                        <Input className="er-bg-gray" type="textarea" name="text" id="exampleText" placeholder={t('formMessage')}
                               style={{height: '150px'}}/>
                    </div>
                </FormGroup>

                <div className="d-flex mb-3 justify-content-center">
                    <button type="button" className="btn btn-success px-4 rounded button-green align-self-baseline">GÖNDER</button>
                </div>
            </Form>
        </div>
    )
};

export default withTranslation('contact')(ContactForm);
