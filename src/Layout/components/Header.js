import { useDispatch } from "react-redux";
import { handleNav } from "../../redux/common/Action";

export default function DashboardNavbar({ props }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-contentbox">
        <div className="top">
          <div
            className="mobiletoggle"
            onClick={() => {
              dispatch(handleNav());
            }}
          >
            <div className="icon icon1"></div>
            <div className="icon icon2"></div>
            <div className="icon icon3"></div>
          </div>
          <h1>Welcome!</h1>
        </div>
        {props}
      </div>
    </>
  );
}
