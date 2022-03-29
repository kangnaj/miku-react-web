import React from "react";
import { useHistory } from "react-router-dom";
import AppTabBar from 'Src/components/layout/AppTabBar'
import "./admin.scss"
function Admin() {
  return (
    <div className="app-contain">
      <AppTabBar/>
    </div>
  )
}
export default Admin;
