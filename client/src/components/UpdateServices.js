import NavigateButton from "./UI/buttons/NavigateButton";

export default function UpdateServices({icon, title, description, pricePerHumane, pricePerUnit}) {
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
                        <p className="title">Ціна за людину:</p>
                        <p className="description">{pricePerHumane}₴</p>
                    </div>
                </div>
                <div className="col-12 col-lg-3 mt-2 mt-lg-0">
                    <div className="meters-data-text">
                        <p className="title">Ціна за одиницю:</p>
                        <p className="description">{pricePerUnit}₴</p>
                    </div>
                </div>
                <div className="col-12 col-lg-3 mt-2 mt-lg-0">
                    <div className="meters-data-text">
                        <NavigateButton to="/admin/services" text="Редагувати" classNames="btn btn-primary col-12" />
                    </div>
                </div>
            </div>
        </div>
    );
}