import React, { useEffect } from "react";
import { matchPath, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const isNavExpanded = useSelector((state) => state.Common.isNavExpanded);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (match("/")) {
      setOpen(!open);
    }
  }, []);

  const { pathname } = useLocation();
  const match = (path) => (path ? !!matchPath({ path }, pathname) : false);

  useEffect(() => {
    isNavExpanded
      ? document.body.classList.add("open")
      : document.body.classList.remove("open");
  }, [isNavExpanded]);

  const navbarAdmin = [
    {
      roles: "Form",
      path: "/",
      active: match("/"),
    },
    {
      roles: "PAGE1",
      path: "/page1",
      active: match("/page1"),
    },
    {
      roles: "PAGE2",
      path: "/page2",
      active: match("/page2"),
    },
  ];

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <h4>Form Builder </h4>
        </div>
        <div className="navigaton">
          <ul>
            {navbarAdmin.map((navbar) => {
              return (
                true && (
                  <>
                    <li className={navbar.active && "active"}>
                      <Link to={navbar.path}>{navbar.roles}</Link>
                    </li>
                  </>
                )
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
