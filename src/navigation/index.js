import React from "react";
import {useAuth} from '../hooks/useAuth'
import UserStack from "./userStack";
import AuthStack from "./authStack";

 function RootNavigation() {
  const { user } = useAuth();

  return user ? <UserStack /> : <AuthStack />;
}

export default RootNavigation