import React, {Component} from "react";
import i18n from "../components/i18n"

class Error extends Component {
    render() {
        const { t } = this.props

        return (
            <div className="d-flex justify-content-center">
                <p>{t('error')}</p>
            </div>
        )
    }
}

export default i18n(Error)