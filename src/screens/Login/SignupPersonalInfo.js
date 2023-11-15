import { memo } from "react";
import { MuiTextInput } from "../../components";
import {
  Button,
  Checkbox,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Icon from "@mdi/react";
import { mdiApple } from "@mdi/js";
import google from "../../assets/Icon.png";
import { useNavigate } from "react-router";

const SignupPersonalInfo = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Grid
      container
      md={6}
      xxxs={12}
      spacing={2}
      sx={{
        paddingTop: "200px",
        [theme.breakpoints.down("md")]: {
          paddingTop: "0px",
        },
      }}>
      <Grid item xxxs={12}>
        <Typography sx={{ color: "#181C32", fontSize: 24 }} align="center">
          Account Details
        </Typography>
      </Grid>
      <Grid item xxxs={12}>
        <Typography sx={{ color: "#A1A5B7", fontSize: 14 }} align="center">
          Add your personal info
        </Typography>
      </Grid>
      <Grid item xxxs={12} md={6}>
        <Button
          sx={{
            textTransform: "none",
            borderColor: "#E1E3EA",
            borderWidth: 1,
            color: "#7E8299",
            fontSize: 12,
          }}
          variant="outlined"
          fullWidth
          startIcon={<img src={google} alt="icon" width={20} height={20} />}>
          Sign in with Google
        </Button>
      </Grid>
      <Grid item xxxs={12} md={6}>
        <Button
          sx={{
            textTransform: "none",
            borderColor: "#E1E3EA",
            borderWidth: 1,
            color: "#7E8299",
            fontSize: 12,
          }}
          fullWidth
          variant="outlined"
          startIcon={<Icon path={mdiApple} size={0.8} color={"#000000"} />}>
          Sign in with Apple
        </Button>
      </Grid>
      <Grid item xxxs={12}>
        <Divider sx={{ color: "#A1A5B7", fontSize: 12 }}>Or with email</Divider>
      </Grid>
      <Grid item xxxs={12} md={6}>
        <MuiTextInput label="First Name" />
      </Grid>
      <Grid item xxxs={12} md={6}>
        <MuiTextInput label="Last Name" />
      </Grid>
      <Grid item xxxs={12}>
        <MuiTextInput label="Creator Name" />
      </Grid>
      <Grid item xxxs={12}>
        <MuiTextInput label="Email" />
      </Grid>
      <Grid item xxxs={12}>
        <MuiTextInput label="Phone Number" />
      </Grid>
      <Grid item xxxs={12}>
        <MuiTextInput label="Password" />
      </Grid>
      <Grid item xxxs={12}>
        <MuiTextInput label="Confirm Password" />
      </Grid>
      <Grid
        item
        xxxs={12}
        sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Checkbox defaultChecked />
        <Typography sx={{ color: "#5E6278", fontSize: 13 }}>
          I Accept the
          <span style={{ color: "#3E97FF", fontSize: 13 }}> Terms</span>
        </Typography>
      </Grid>
      <Grid item xxxs={12}>
        <Button
          sx={{
            width: "100%",
            backgroundColor: "#3E97FF",
            textTransform: "none",
          }}
          variant="contained"
          onClick={() => navigate("/dashboard")}>
          Continue
        </Button>
        <p style={{ textAlign: "center", color: "#A1A5B7", fontSize: 14 }}>
          Already have an Account?
          <span style={{ color: "#3E97FF", fontSize: 14 }}> Sign in</span>
        </p>
      </Grid>
    </Grid>
  );
};

export default memo(SignupPersonalInfo);
