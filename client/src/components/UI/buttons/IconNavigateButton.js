import {useNavigate} from "react-router-dom";

export default function IconNavigateButton({to, text, classNames}) {
    const navigate = useNavigate();

    return (
        <button type="button" onClick={() => navigate(to, { replace: true })} className={classNames}>
            {text}
            <svg className="ms-2" width="18" height="16" viewBox="0 0 22 16" fill="#1a73e8" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9807 0.260397C13.5723 -0.111308 12.9397 -0.0815071 12.5681 0.326971C12.1963 0.735433 12.2261 1.36789 12.6348 1.73961L18.4153 7.00001H1C0.447754 7.00001 0 7.44771 0 8.00001C0 8.5523 0.447754 9.00001 1 9.00001H18.4153L12.6348 14.2604C12.2261 14.6321 12.1963 15.2646 12.5681 15.673C12.9397 16.0815 13.5723 16.1113 13.9807 15.7396L21.6731 8.73961C21.8813 8.5501 22 8.28158 22 8.00001C22 7.71844 21.8813 7.44991 21.6731 7.2604L13.9807 0.260397Z"></path>
            </svg>
        </button>
    );
}