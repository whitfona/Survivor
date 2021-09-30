import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
import { UserContext } from "./UserContext";

export const ProtectedRoute = ({ component: Component, ...rest}) => {
  
  const { authenticated } = useContext(UserContext);
  
  return (
    <Route 
    {...rest}
    render={props => {
      if (authenticated) {
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