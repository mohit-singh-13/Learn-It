import { CircularProgress, Container } from "@mui/material"

const Loader = () => {
  return (
    <Container maxWidth={"sm"} sx={{marginTop: "18%", marginLeft: "45%"}}>
      <CircularProgress />
    </Container>
  )
}

export default Loader