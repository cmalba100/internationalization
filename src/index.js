import React from "react";
import ReactDOM from "react-dom";
//import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobsList";

import { IntlProvider, addLocaleData } from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';
import enLocaleData from 'react-intl/locale-data/en';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

var userLang = navigator.language || navigator.userLanguage;

//alert ("The language is: " + userLang);



if (userLang == 'es-ES') {
    //Español
    addLocaleData(esLocaleData);

    ReactDOM.render(
        <IntlProvider locale="es-ES" messages={localeEsMessages}>
            <JobsList />
        </IntlProvider>, document.getElementById("root")
    );

}
else {
    //English
    addLocaleData(enLocaleData);

    ReactDOM.render(
        <IntlProvider locale="en-EN" messages={localeEnMessages}>
            <JobsList />
        </IntlProvider>, document.getElementById("root")
    );

}






