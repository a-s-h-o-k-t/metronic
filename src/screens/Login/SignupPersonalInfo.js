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
      lg={6}
      md={8}
      xxxs={12}
      rowSpacing={4}
      sx={{
        paddingTop: "200px",
        paddingBottom: "50px",
        [theme.breakpoints.down("md")]: {
          paddingTop: "0px",
        },
      }}>
      <Grid
        item
        xxxs={12}
        sx={{ gap: "15px", display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            color: "#181C32",
            fontSize: 24,
            fontWeight: 600,
            lineHeight: "24PX",
          }}
          align="center">
          Account Details
        </Typography>
        <Typography
          sx={{
            color: "#A1A5B7",
            fontSize: 14,
            fontWeight: 500,
            lineHeight: "14px",
          }}
          align="center">
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
            fontWeight: 600,
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
            fontWeight: 600,
            fontSize: 12,
          }}
          fullWidth
          variant="outlined"
          startIcon={<Icon path={mdiApple} size={0.8} color={"#000000"} />}>
          Sign in with Apple
        </Button>
      </Grid>
      <Grid item xxxs={12}>
        <Divider
          sx={{
            color: "#A1A5B7",
            fontSize: 12,
            fontWeight: 500,
            lineHeight: "12px",
          }}>
          Or with email
        </Divider>
      </Grid>
      <Grid item container xxx={12} rowSpacing={2.5}>
        <Grid container item xxx={12} columnSpacing={2.5}>
          <Grid item xxxs={12} md={6}>
            <MuiTextInput placeholder="First Name" />
          </Grid>
          <Grid item xxxs={12} md={6}>
            <MuiTextInput placeholder="Last Name" />
          </Grid>
        </Grid>
        <Grid item xxxs={12}>
          <MuiTextInput placeholder="Creator Name" />
        </Grid>
        <Grid item xxxs={12}>
          <MuiTextInput placeholder="Email" />
        </Grid>
        <Grid item xxxs={12}>
          <MuiTextInput placeholder="Phone Number" />
        </Grid>
        <Grid item xxxs={12}>
          <MuiTextInput placeholder="Password" />
        </Grid>
        <Grid item xxxs={12}>
          <MuiTextInput placeholder="Confirm Password" />
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
              borderRadius: "6px",
            }}
            variant="contained"
            onClick={() => navigate("/dashboard")}>
            Continue
          </Button>
        </Grid>
        <Grid item xxxs={12}>
          <Typography
            style={{
              textAlign: "center",
              color: "#A1A5B7",
              fontSize: 14,
              fontWeight: 500,
            }}>
            Already have an Account?
            <span style={{ color: "#3E97FF", fontSize: 14 }}> Sign in</span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(SignupPersonalInfo);
