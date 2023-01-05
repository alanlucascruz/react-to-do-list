import { Fragment, memo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "../Dropdown";
import ProfileModal from "./ProfileModal";
import PasswordModal from "./PasswordModal";

function HeaderDropdown() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const toggleProfileModal = () => setShowProfileModal(!showProfileModal);
  const togglePasswordModal = () => setShowPasswordModal(!showPasswordModal);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token, navigate]);

  return (
    <Fragment>
      <Dropdown
        base={
          <div className="user">
            <h4>{user.name}</h4>
            <i className="bi bi-person-fill"></i>
          </div>
        }
        content={
          <Fragment>
            <Link onClick={toggleProfileModal}>
              <i className="bi bi-person"></i> Editar Perfil
            </Link>
            <Link onClick={togglePasswordModal}>
              <i className="bi bi-lock"></i> Alterar Senha
            </Link>
            <Link onClick={() => dispatch(signOut())}>
              <i className="bi bi-box-arrow-right"></i> Sair
            </Link>
          </Fragment>
        }
      />

      <ProfileModal show={showProfileModal} toggle={toggleProfileModal} />
      <PasswordModal show={showPasswordModal} toggle={togglePasswordModal} />
    </Fragment>
  );
}

export default memo(HeaderDropdown);
