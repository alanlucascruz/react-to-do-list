import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";
import ProfileModal from "./ProfileModal";
import PasswordModal from "./PasswordModal";

function HeaderDropdown() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const toggleProfileModal = () => setShowProfileModal(!showProfileModal);
  const togglePasswordModal = () => setShowPasswordModal(!showPasswordModal);

  return (
    <Fragment>
      <Dropdown
        Base={() => (
          <div className="user">
            <h4>Alan Cruz</h4>
            <i className="bi bi-person-fill"></i>
          </div>
        )}
        Content={() => (
          <Fragment>
            <Link onClick={toggleProfileModal}>
              <i className="bi bi-person"></i> Editar Perfil
            </Link>
            <Link onClick={togglePasswordModal}>
              <i className="bi bi-lock"></i> Alterar Senha
            </Link>
            <Link to="/auth">
              <i className="bi bi-box-arrow-right"></i> Sair
            </Link>
          </Fragment>
        )}
      />

      <ProfileModal show={showProfileModal} toggle={toggleProfileModal} />
      <PasswordModal show={showPasswordModal} toggle={togglePasswordModal} />
    </Fragment>
  );
}

export default HeaderDropdown;
