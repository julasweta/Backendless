import React, { useEffect, useState } from "react";
import { apiService } from "../services/ApiServices";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AppRoutes } from "../routing/AppRoutes";

const Header = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {
    apiService
      .get(process.env.REACT_APP_URL_PART)
      .then((response) => {
        const responseData = response.data;
        setData(responseData);
        if (location === "/") {
          navigate(AppRoutes.DummyList);
        } else {
          navigate(location);
        }
      })
      .catch((error) => {
        console.error("Помилка під час отримання даних:", error);
      });
  }, [location, navigate]);

  return (
    <header>
      <ul>
        {data
          ? data
              .slice() // Створити копію масиву, щоб не змінювати оригінальний
              .sort((a, b) => a.order - b.order) // Відсортувати за полем 'order'
              .map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))
          : null}
      </ul>
    </header>
  );
};

export default Header;
