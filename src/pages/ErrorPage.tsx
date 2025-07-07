import { Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../compoments/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <div>
          {isRouteErrorResponse(error) ? "Invalid page" : "Unexpected error"}
        </div>
      </Box>
    </>
  );
};

export default ErrorPage;
