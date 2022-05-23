import React from "react";


function MetersDataItem({icon, title, description, data, date, sum}) {
    return(
        <div className="meters-data-item mb-3">
            <div className="row">
                <div className="col-12 col-lg-3">
                    <div className="meters-data-content">
                        <i className={icon}></i>
                        <div className="meters-data-text d-block">
                            <p className="title">{title}</p>
                            <p className="description">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-3 mt-2 mt-lg-0">
                    <div className="meters-data-text">
                        <p className="title">Поточні показники:</p>
                        <p className="description">{data}</p>
                    </div>
                </div>
                <div className="col-12 col-lg-3 mt-2 mt-lg-0">
                    <div className="meters-data-text">
                        <p className="title">Дата редагування:</p>
                        <p className="description">{date}</p>
                    </div>
                </div>
                <div className="col-12 col-lg-3 mt-2 mt-lg-0">
                    <div className="meters-data-text">
                        <p className="title">Сума до сплати:</p>
                        <p className="description">{sum}₴</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default MetersDataItem;