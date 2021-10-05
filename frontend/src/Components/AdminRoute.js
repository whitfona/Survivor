import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
import { UserContext } from "./UserContext";

export const AdminRoute = ({ component: Component, ...rest}) => {
  
  const { authenticated, currentPlayer } = useContext(UserContext);
  
  return (
    <Route 
    {...rest}
    render={props => {
      if (authenticated && currentPlayer.Admin === 1) {
        return <Component {...props} />
      } else {
        return <Redirect to={
          {
            pathname: "/login",
            state: {
              from: props.location
            }
          }
        }
        />
      }
    }}
    />
  )
}