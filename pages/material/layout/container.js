import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const ContainerScreen = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container>

      <h2>fixed</h2>
      <Container fixed>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container>
      <style jsx>{`
        .v-container {
          height: 200px;
          background-color: purple;
        }
      `}</style>
    </>
  );
};
export default ContainerScreen;
