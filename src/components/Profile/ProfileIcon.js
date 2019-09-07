import React, { useState } from "react";

const ProfileIcon = () => {
  const [dropdownOpen, setDropdownOpen] = useState();
  return (
    <div class="pa4 tc">
      <img
        src="http://tachyons.io/img/logo.jpg"
        class="br-100 ba h3 w3 dib"
        alt="avatar"
      />
    </div>
  );
};

export default ProfileIcon;
