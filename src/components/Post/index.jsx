import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import { fetchUsers } from "../../redux/slices/userSlices";
import "./style.css";
const Post = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const users = useSelector((state) => state.user);
  const { loading, usersList } = users;
  return (
    <div>
      <Header page="post" />
      <h3>Usuarios de Delivery App</h3>
      <hr />
      {loading && <h4>Cargando..</h4>}
      {!loading &&
        usersList?.map((user) => (
          <div key={user.id} className="usersList">
            {user.image != null ? (
              <img src={user?.image} alt="" />
            ) : (
              <img src="https://res.cloudinary.com/jdvpl/image/upload/v1656359029/man-g761407816_1280_r08dyd.png" />
            )}
            <p>
              <b>Nombre:</b> {user.name}
            </p>
            <p>
              <b>Email:</b> {user.email}
            </p>
            <p>
              <b>Telefono:</b> {user.phone}
            </p>
            <p>
              <b>Creado: </b> {user.created_at}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Post;
