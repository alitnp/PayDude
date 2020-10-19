import React, { Component } from 'react';
import "../styles/documentUploader.css";

class DocumentUploader extends Component {
    state = {}
    render() {
        return (<div className="document-uploader">
            <p>بارگزاری مدارک:</p>
            <div className="file-upload">
                <label for="drivinglicense"><span>عکس از گواهینامه</span>
                    <input type="file" id="drivinglicense" name="drivinglicense" /></label>
                <label for="personpic"><span>عکس 3 * 4</span>
                    <input type="file" id="personpic" name="personpic" /></label>
                <label for="passportpic"><span>عکس از پاسپورت</span>
                    <input type="file" id="passportpic" name="passportpic" /></label>
            </div>
        </div>);
    }
}

export default DocumentUploader;